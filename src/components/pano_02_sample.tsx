import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useAudio } from "../audio/AudioProvider";
import { useKeyboard } from "../providers/Keyboard";

type PanoProps = {
  width?: number;
  height?: number;
  triggerKey: string;
  videoName: string;
  sound: string;
  shape?: "plane" | "circle";
  position1?: [number, number, number];
};

export default function PanoNoiseSample({
  width = 50,
  height = 28.125,
  triggerKey,
  videoName,
  sound,
  shape = "plane",
  position1 = [0, 0, 0],
}: PanoProps) {
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);

  // ==============================
  // VIDEO
  // ==============================

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const textureRef = useRef<THREE.VideoTexture | null>(null);

  const [texture, setTexture] =
    useState<THREE.VideoTexture | null>(null);

  // ==============================
  // AUDIO
  // ==============================

  const audio = useAudio();

  // ==============================
  // KEYBOARD
  // ==============================

  const keys = useKeyboard();

  const isPressed =
    keys[triggerKey.toLowerCase() as keyof typeof keys];

  // ==============================
  // VIDEO TEXTURE
  // ==============================

  useEffect(() => {
    const video = document.createElement("video");

    video.src = `/${videoName}`;

    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.preload = "metadata";

    videoRef.current = video;

    // ==============================
    // VIDEO TEXTURE
    // ==============================

    const videoTexture = new THREE.VideoTexture(video);

    videoTexture.colorSpace = THREE.SRGBColorSpace;

    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;

    videoTexture.generateMipmaps = false;

    textureRef.current = videoTexture;

    setTexture(videoTexture);

    // ==============================
    // CLEANUP
    // ==============================

    return () => {
      video.pause();

      video.removeAttribute("src");
      video.load();

      videoTexture.dispose();

      videoRef.current = null;
      textureRef.current = null;
    };
  }, [videoName]);

  // ==============================
  // PLAY / STOP
  // ==============================

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !audio) return;

    if (isPressed) {
      // ------------------------------
      // VIDEO START
      // ------------------------------

      video.currentTime = 0;

      video.play().catch((error) => {
        console.error(
          `Video "${videoName}" nije mogao da se pokrene:`,
          error
        );
      });

      // ------------------------------
      // SOUND START
      // ------------------------------

      audio.playSound(sound);
    } else {
      // ------------------------------
      // VIDEO STOP
      // ------------------------------

      video.pause();

      // ------------------------------
      // SOUND STOP
      // ------------------------------

      audio.stopSound(sound);
    }

    // ==============================
    // CLEANUP
    // ==============================

    return () => {
      video.pause();
      audio.stopSound(sound);
    };
  }, [isPressed, videoName, sound, audio]);

  // ==============================
  // FADE
  // ==============================

  useFrame((_, delta) => {
    if (!materialRef.current) return;

    const targetOpacity = isPressed ? 1 : 0;

    materialRef.current.opacity = THREE.MathUtils.damp(
      materialRef.current.opacity,
      targetOpacity,
      5,
      delta
    );
  });

  // ==============================
  // RENDER
  // ==============================

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
        <circleGeometry args={[width / 2, 64]} />
      ) : (
        <planeGeometry args={[width, height]} />
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
