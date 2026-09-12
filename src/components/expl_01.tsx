import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useAudio } from "../audio/AudioProvider";

type PanoProps = {
  width?: number;
  height?: number;
  triggerKey: string;
  videoName: string;
  shape?: "plane" | "circle";
  position1?: [number, number, number];
  sound?: string;
};

export default function Pano({
  width = 50,
  height = 28.125,
  triggerKey,
  videoName,
  shape,
  position1 = [0, 0, 0],
  sound = "outer",
}: PanoProps) {
  const materialRef =
    useRef<THREE.MeshBasicMaterial>(null);

  const [texture, setTexture] =
    useState<THREE.VideoTexture | null>(null);

  const isPressed = useRef(false);
  const audio = useAudio();

  // ==============================
  // AUDIO
  // ==============================

  const playSound = () => {
    if (!audio) return;

    audio.playSound(sound);
  };

  // ==============================
  // VIDEO
  // ==============================

  useEffect(() => {
    const video = document.createElement("video");

    video.src = `/${videoName}`;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;

    const videoTexture =
      new THREE.VideoTexture(video);

    videoTexture.colorSpace =
      THREE.SRGBColorSpace;

    setTexture(videoTexture);

    video.play().catch(console.log);

    return () => {
      video.pause();
      videoTexture.dispose();
      video.remove();
    };
  }, [videoName]);

  // ==============================
  // KEYBOARD TRIGGER
  // ==============================

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      if (key !== triggerKey.toLowerCase()) {
        return;
      }

      // Sprečava ponovno okidanje dok držiš dugme
      if (isPressed.current) {
        return;
      }

      isPressed.current = true;

      playSound();
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      if (key !== triggerKey.toLowerCase()) {
        return;
      }

      isPressed.current = false;
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    window.addEventListener(
      "keyup",
      handleKeyUp
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      window.removeEventListener(
        "keyup",
        handleKeyUp
      );
    };
  }, [triggerKey, sound, audio]);

  // ==============================
  // FADE
  // ==============================

  useFrame((_, delta) => {
    if (!materialRef.current) return;

    const targetOpacity =
      isPressed.current ? 1 : 0;

    materialRef.current.opacity =
      THREE.MathUtils.damp(
        materialRef.current.opacity,
        targetOpacity,
        5,
        delta
      );
  });

  if (!texture) return null;

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
        transparent
        opacity={0}
      />
    </mesh>
  );
}
