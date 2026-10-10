import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

type PanoProps = {
  width?: number;
  height?: number;
  triggerKey?: string;
  videoName: string;
  shape?: "plane" | "circle";
  position1?: [number, number, number];
  pitch?: number;
};

export default function PanoNoise03({
  width = 50,
  height = 28.125,
  videoName,
  shape = "plane",
  position1 = [0, 0, 0],
  pitch = 11,
}: PanoProps) {
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const textureRef = useRef<THREE.VideoTexture | null>(null);

  const [texture, setTexture] =
    useState<THREE.VideoTexture | null>(null);

  // ==============================
  // VIDEO
  // ==============================

  useEffect(() => {
    const video = document.createElement("video");

    video.src = `/${videoName}`;

    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";

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
    // ODMAH PLAY
    // ==============================

    video.play().catch((error) => {
      console.error(
        `Video "${videoName}" nije mogao da se pokrene:`,
        error
      );
    });

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
  // FADE IN
  // ==============================

  useFrame((_, delta) => {
    if (!materialRef.current) return;

    materialRef.current.opacity = THREE.MathUtils.damp(
      materialRef.current.opacity,
      1,
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