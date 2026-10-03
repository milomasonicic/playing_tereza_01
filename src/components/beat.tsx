import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

import { useAudio } from "../audio/AudioProvider";
import { useKeyboard } from "../providers/Keyboard";
import { useBeat } from "../providers/BeatProvider";

type PanoProps = {
  width?: number;
  height?: number;
  triggerKey: string;
  videoName: string;
  shape?: "plane" | "circle";
  position1?: [number, number, number];
  pitch?: number;
};

type VideoEntry = {
  video: HTMLVideoElement;
  texture: THREE.VideoTexture;
};

export default function PanoNoise({
  width = 50,
  height = 28.125,
  triggerKey,
  videoName,
  shape = "plane",
  position1 = [0, 0, 0],
  pitch = 11,
}: PanoProps) {
  const materialRef =
    useRef<THREE.MeshBasicMaterial>(null);

  const videosRef =
    useRef<Map<string, VideoEntry>>(new Map());

  const [texture, setTexture] =
    useState<THREE.VideoTexture | null>(null);

  const audio = useAudio();
  const keys = useKeyboard();

  const {
    running,
    currentBeat,
    beatIndex,
  } = useBeat();

  const keyboardPressed =
    keys[
      triggerKey.toLowerCase() as keyof typeof keys
    ];

  /*
   * BEAT PROVIDER JE SOURCE OF TRUTH.
   *
   * Ako provider kaže:
   *
   * {
   *   key: "a",
   *   videoName: "output111.webm",
   *   pitch: 33
   * }
   *
   * onda je to aktivni video.
   */
  const beatActive =
    running &&
    currentBeat !== null &&
    currentBeat.key.toLowerCase() ===
      triggerKey.toLowerCase();

  const activeVideo =
    beatActive && currentBeat
      ? currentBeat.videoName
      : videoName;

  const activePitch =
    beatActive && currentBeat
      ? currentBeat.pitch
      : pitch;

  const isPressed =
    keyboardPressed || beatActive;

  /*
   * Kreiramo video element SAMO JEDNOM po video fajlu.
   *
   * NEMA destroy/create na svaki beat.
   */
  useEffect(() => {
    const names = new Set<string>();

    names.add(videoName);

    // svi video fajlovi koje provider može da koristi
    if (currentBeat) {
      names.add(currentBeat.videoName);
    }

    for (const name of names) {
      if (videosRef.current.has(name)) {
        continue;
      }

      const video =
        document.createElement("video");

      video.src = `/${name}`;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.preload = "auto";

      const texture =
        new THREE.VideoTexture(video);

      texture.colorSpace =
        THREE.SRGBColorSpace;

      texture.minFilter =
        THREE.LinearFilter;

      texture.magFilter =
        THREE.LinearFilter;

      texture.generateMipmaps = false;

      videosRef.current.set(name, {
        video,
        texture,
      });
    }

    return () => {};
  }, [videoName, currentBeat?.videoName]);

  /*
   * Kada BeatProvider promeni currentBeat,
   * samo prebacujemo texture.
   *
   * Provider -> currentBeat.videoName -> ovde.
   */
  useEffect(() => {
    const entry =
      videosRef.current.get(activeVideo);

    if (!entry) return;

    setTexture(entry.texture);
  }, [activeVideo]);

  /*
   * BEAT PLAYBACK
   *
   * Ovo se izvršava samo kada provider promeni beat.
   */
  useEffect(() => {
    if (!beatActive || !currentBeat) {
      return;
    }

    const entry =
      videosRef.current.get(
        currentBeat.videoName
      );

    if (!entry) {
      console.warn(
        "Video nije još kreiran:",
        currentBeat.videoName
      );
      return;
    }

    const video = entry.video;

    console.log(
      "VIDEO PLAY:",
      currentBeat.videoName
    );

    // Pauziramo samo druge video elemente.
    for (const [name, other] of videosRef.current) {
      if (name !== currentBeat.videoName) {
        other.video.pause();
      }
    }

    video.currentTime = 0;

    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        /*
         * AbortError zbog promene/pauze više ne tretiramo
         * kao ozbiljnu grešku.
         */
        if (error?.name !== "AbortError") {
          console.error(
            "VIDEO PLAY ERROR:",
            currentBeat.videoName,
            error
          );
        }
      });
    }

    audio?.startNoise(currentBeat.pitch);
  }, [
    beatIndex,
    beatActive,
    currentBeat,
    audio,
  ]);

  /*
   * KEYBOARD
   */
  useEffect(() => {
    if (beatActive) return;

    const entry =
      videosRef.current.get(videoName);

    if (!entry) return;

    const video = entry.video;

    if (keyboardPressed) {
      video.currentTime = 0;

      video.play().catch((error) => {
        if (error?.name !== "AbortError") {
          console.error(
            `Video "${videoName}" nije mogao da se pokrene:`,
            error
          );
        }
      });

      audio?.startNoise(pitch);
    } else {
      video.pause();
      audio?.stopNoise();
    }
  }, [
    keyboardPressed,
    beatActive,
    videoName,
    pitch,
    audio,
  ]);

  /*
   * CLEANUP
   */
  useEffect(() => {
    return () => {
      for (const { video, texture } of videosRef.current) {
        video.pause();
        video.removeAttribute("src");
        video.load();

        texture.dispose();
      }

      videosRef.current.clear();
    };
  }, []);

  useFrame((_, delta) => {
    if (!materialRef.current) return;

    const targetOpacity =
      isPressed ? 1 : 0;

    materialRef.current.opacity =
      THREE.MathUtils.damp(
        materialRef.current.opacity,
        targetOpacity,
        5,
        delta
      );
  });

  if (!texture) {
    return null;
  }

  return (
    <mesh
      position={position1}
      rotation={[
        THREE.MathUtils.degToRad(-21.8),
        0,
        0,
      ]}
    >
      {shape === "circle" ? (
        <circleGeometry
          args={[width / 2, 64]}
        />
      ) : (
        <planeGeometry
          args={[width, height]}
        />
      )}

      <meshBasicMaterial
        ref={materialRef}
        map={texture}
        toneMapped={false}
        side={THREE.DoubleSide}
        depthWrite={false}
        transparent
        opacity={0}
      />
    </mesh>
  );
}