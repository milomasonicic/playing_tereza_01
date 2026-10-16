import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

import { useAudio } from "../audio/AudioProvider";
import { useKeyboard } from "../providers/Keyboard";
import { useBeat } from "../providers/BeatProvider";

type SynthOscillatorType =
  | "sine"
  | "triangle"
  | "square"
  | "sawtooth";

type PanoProps = {
  width?: number;
  height?: number;
  triggerKey: string;
  videoName: string;
  shape?: "plane" | "circle";
  position1?: [number, number, number];
  pitch?: number;
  frequency1?: number;
  rythm: string;
  osc: SynthOscillatorType;
};

type VideoEntry = {
  video: HTMLVideoElement;
  texture: THREE.VideoTexture;
};

export default function PanoBuildBeat1({
  width = 50,
  height = 28.125,
  triggerKey,
  videoName,
  shape = "plane",
  position1 = [0, 0, 0],
  pitch = 11,
  osc = "triangle",
  frequency1 = 10,
  rythm = "1n",
}: PanoProps) {
  const materialRef =
    useRef<THREE.MeshBasicMaterial>(null);

  /*
   * Svaki video postoji samo jednom.
   *
   * videoName -> {
   *   video,
   *   texture
   * }
   */
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

  // =========================================
  // KEYBOARD
  // =========================================

  const keyboardPressed =
    keys[
      triggerKey.toLowerCase() as keyof typeof keys
    ];

  // =========================================
  // BEAT
  // =========================================

  /*
   * Beat je aktivan samo ako:
   *
   * 1. BeatProvider radi
   * 2. postoji currentBeat
   * 3. key beata odgovara ovom Pano-u
   */
  const beatActive =
    running &&
    currentBeat !== null &&
    currentBeat.key.toLowerCase() ===
      triggerKey.toLowerCase();

  /*
   * Ako beat nije aktivan koristimo props.
   *
   * Ako beat jeste aktivan:
   *
   * currentBeat.videoName
   * currentBeat.pitch
   */
  const activeVideo =
    beatActive && currentBeat
      ? currentBeat.videoName
      : videoName;

  const activePitch =
    beatActive && currentBeat
      ? currentBeat.pitch
      : pitch;

  /*
   * Ovo kontroliše opacity.
   *
   * Keyboard ili beat mogu da aktiviraju pano.
   */
  const isPressed =
    keyboardPressed || beatActive;

  // =========================================
  // CREATE / CACHE VIDEOS
  // =========================================

  useEffect(() => {
    const names = new Set<string>();

    /*
     * Default video ovog Pano-a
     */
    names.add(videoName);

    /*
     * Video koji trenutni beat koristi
     */
    if (currentBeat?.videoName) {
      names.add(currentBeat.videoName);
    }

    for (const name of names) {
      /*
       * Ako već postoji, ništa ne radimo.
       */
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

      const videoTexture =
        new THREE.VideoTexture(video);

      videoTexture.colorSpace =
        THREE.SRGBColorSpace;

      videoTexture.minFilter =
        THREE.LinearFilter;

      videoTexture.magFilter =
        THREE.LinearFilter;

      videoTexture.generateMipmaps = false;

      videosRef.current.set(name, {
        video,
        texture: videoTexture,
      });
    }

    return () => {};
  }, [
    videoName,
    currentBeat?.videoName,
  ]);

  // =========================================
  // ACTIVE TEXTURE
  // =========================================

  /*
   * Kada BeatProvider promeni videoName,
   * samo prebacujemo texture.
   *
   * Ne pravimo novi video element.
   */
  useEffect(() => {
    const entry =
      videosRef.current.get(activeVideo);

    if (!entry) {
      return;
    }

    setTexture(entry.texture);
  }, [activeVideo]);

  // =========================================
  // BEAT PLAYBACK
  // =========================================

  /*
   * Ovo se izvršava kada BeatProvider
   * prebaci na novi beat.
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
      "BUILD BEAT VIDEO PLAY:",
      currentBeat.videoName,
      "pitch:",
      currentBeat.pitch
    );

    /*
     * Pauziramo druge videe.
     */
    for (const [name, other] of videosRef.current) {
      if (name !== currentBeat.videoName) {
        other.video.pause();
      }
    }

    /*
     * Novi beat počinje od početka.
     */
    video.currentTime = 0;

    const playPromise =
      video.play();

    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        /*
         * AbortError može da nastane kada
         * provider vrlo brzo promeni beat.
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

    /*
     * BITNO:
     *
     * pitch dolazi iz BeatProvider-a.
     *
     * osc / frequency1 / rythm dolaze
     * iz ovog PanoBuildBeat1 instance-a.
     */
    audio?.startNoise1(
      currentBeat.pitch,
      osc,
      frequency1,
      rythm
    );
  }, [
    beatIndex,
    beatActive,
    currentBeat,
    audio,
    osc,
    frequency1,
    rythm,
  ]);

  // =========================================
  // KEYBOARD PLAYBACK
  // =========================================

  useEffect(() => {
    /*
     * Ako BeatProvider trenutno kontroliše
     * ovaj Pano, keyboard ne sme da preuzme
     * kontrolu.
     */
    if (beatActive) {
      return;
    }

    const entry =
      videosRef.current.get(videoName);

    if (!entry) {
      return;
    }

    const video = entry.video;

    if (keyboardPressed) {
      /*
       * Keyboard playback počinje od početka.
       */
      video.currentTime = 0;

      video.play().catch((error) => {
        if (error?.name !== "AbortError") {
          console.error(
            `Video "${videoName}" nije mogao da se pokrene:`,
            error
          );
        }
      });

      audio?.startNoise1(
        pitch,
        osc,
        frequency1,
        rythm
      );
    } else {
      video.pause();

      audio?.stopNoise();
    }
  }, [
    keyboardPressed,
    beatActive,
    videoName,
    pitch,
    osc,
    frequency1,
    rythm,
    audio,
  ]);

  // =========================================
  // CLEANUP
  // =========================================

  useEffect(() => {
    return () => {
      for (const {
        video,
        texture,
      } of videosRef.current) {
        video.pause();

        video.removeAttribute("src");
        video.load();

        texture.dispose();
      }

      videosRef.current.clear();
    };
  }, []);

  // =========================================
  // FADE
  // =========================================

  useFrame((_, delta) => {
    if (!materialRef.current) {
      return;
    }

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

  // =========================================
  // RENDER
  // =========================================

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