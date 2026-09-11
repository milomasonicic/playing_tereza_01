
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

type PanoProps = {
  width?: number;
  height?: number;
  triggerKey: string;
};

export default function Pano({
  width = 50,
  height = 28.125,
  triggerKey,
}: PanoProps) {
  const materialRef =
    useRef<THREE.MeshBasicMaterial>(null);

  const [texture, setTexture] =
    useState<THREE.VideoTexture | null>(null);

  const isPressed = useRef(false);

  // Video
  useEffect(() => {
    const video = document.createElement("video");

    video.src = "/stena2.mp4";
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;

    const videoTexture = new THREE.VideoTexture(video);

    videoTexture.colorSpace = THREE.SRGBColorSpace;

    setTexture(videoTexture);

    video.play().catch(console.log);

    return () => {
      video.pause();
      videoTexture.dispose();
      video.remove();
    };
  }, []);

  // Keyboard trigger
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === triggerKey.toLowerCase()) {
        isPressed.current = true;
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === triggerKey.toLowerCase()) {
        isPressed.current = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [triggerKey]);

  // Fade
  useFrame((_, delta) => {
    if (!materialRef.current) return;

    const targetOpacity = isPressed.current ? 1 : 0;

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
      position={[0, 0, 0]}
      rotation={[
        THREE.MathUtils.degToRad(-21.8),
        0,
        0,
      ]}
    >
      <planeGeometry args={[width, height]} />

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