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
  rythm?: string;
  osc?: SynthOscillatorType;
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

  // =====================================================
  // KEYBOARD
  // =====================================================

  const keyboardPressed =
    keys[
      triggerKey.toLowerCase() as keyof typeof keys
    ];

  // =====================================================
  // BEAT ACTIVE
  // =====================================================

  const beatActive =
    running &&
    currentBeat !== null &&
    currentBeat.key.toLowerCase() ===
      triggerKey.toLowerCase();

  // =====================================================
  // ACTIVE BEAT VALUES
  // =====================================================

  /*
   * Kada beat radi:
   *
   * currentBeat ima prednost.
   *
   * Ako neka vrednost nije definisana u beat-u,
   * koristi se vrednost iz Pano props-a.
   */

  const activeVideo =
    beatActive && currentBeat?.videoName
      ? currentBeat.videoName
      : videoName;

  const activePitch =
    beatActive && currentBeat
      ? currentBeat.pitch
      : pitch;

  const activeOsc =
    beatActive && currentBeat?.osc !== undefined
      ? currentBeat.osc
      : osc;

  const activeFrequency =
    beatActive &&
    currentBeat?.frequency1 !== undefined
      ? currentBeat.frequency1
      : frequency1;

  const activeRythm =
    beatActive && currentBeat?.rythm !== undefined
      ? currentBeat.rythm
      : rythm;

  const activeWidth =
    beatActive &&
    currentBeat?.width !== undefined
      ? currentBeat.width
      : width;

  const activeHeight =
    beatActive &&
    currentBeat?.height !== undefined
      ? currentBeat.height
      : height;

  const activeShape =
    beatActive &&
    currentBeat?.shape !== undefined
      ? currentBeat.shape
      : shape;

  const activePosition =
    beatActive &&
    currentBeat?.position1 !== undefined
      ? currentBeat.position1
      : position1;

  // =====================================================
  // PRESSED
  // =====================================================

  const isPressed =
    keyboardPressed || beatActive;

  // =====================================================
  // CREATE / CACHE VIDEOS
  // =====================================================

  useEffect(() => {
    const names = new Set<string>();

    /*
     * Default video
     */
    names.add(videoName);

    /*
     * Trenutni beat video
     */
    if (currentBeat?.videoName) {
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
  }, [
    videoName,
    currentBeat?.videoName,
  ]);

  // =====================================================
  // ACTIVE TEXTURE
  // =====================================================

  useEffect(() => {
    const entry =
      videosRef.current.get(activeVideo);

    if (!entry) {
      return;
    }

    setTexture(entry.texture);
  }, [activeVideo]);

  // =====================================================
  // BEAT PLAYBACK
  // =====================================================

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
      "BUILD BEAT:",
      {
        video: activeVideo,
        pitch: activePitch,
        osc: activeOsc,
        frequency: activeFrequency,
        rythm: activeRythm,
        width: activeWidth,
        height: activeHeight,
        shape: activeShape,
        position: activePosition,
      }
    );

    // -------------------------------------------------
    // STOP OTHER VIDEOS
    // -------------------------------------------------

    for (const [name, other] of videosRef.current) {
      if (name !== currentBeat.videoName) {
        other.video.pause();
      }
    }

    // -------------------------------------------------
    // PLAY CURRENT VIDEO
    // -------------------------------------------------

    video.currentTime = 0;

    const playPromise =
      video.play();

    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        if (error?.name !== "AbortError") {
          console.error(
            "VIDEO PLAY ERROR:",
            currentBeat.videoName,
            error
          );
        }
      });
    }

    // -------------------------------------------------
    // AUDIO
    // -------------------------------------------------

    audio?.startNoise1(
      activePitch,
      activeOsc,
      activeFrequency,
      activeRythm
    );
  }, [
    beatIndex,
    beatActive,
    currentBeat,
    audio,

    activeVideo,
    activePitch,
    activeOsc,
    activeFrequency,
    activeRythm,

    activeWidth,
    activeHeight,
    activeShape,
    activePosition,
  ]);

  // =====================================================
  // KEYBOARD PLAYBACK
  // =====================================================

  useEffect(() => {
    /*
     * Ako beat kontroliše Pano,
     * keyboard ne sme da preuzme kontrolu.
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

  // =====================================================
  // CLEANUP
  // =====================================================

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

  // =====================================================
  // FADE
  // =====================================================

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

  // =====================================================
  // RENDER
  // =====================================================

  if (!texture) {
    return null;
  }

  return (
    <mesh
      position={activePosition}
      rotation={[
        THREE.MathUtils.degToRad(-21.8),
        0,
        0,
      ]}
    >
      {activeShape === "circle" ? (
        <circleGeometry
          args={[
            activeWidth / 2,
            64,
          ]}
        />
      ) : (
        <planeGeometry
          args={[
            activeWidth,
            activeHeight,
          ]}
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