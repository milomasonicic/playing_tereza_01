import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useAudio } from "../audio/AudioProvider";
import { useKeyboard } from "../providers/Keyboard";

type PanoPhotoProps = {
  width?: number;
  height?: number;
  triggerKey: string;
  imageName: string;
  shape?: "plane" | "circle";
  position1?: [number, number, number];
  pitch?: number;
};

export default function PanoPhoto1({
  width = 50,
  height = 28.125,
  triggerKey,
  imageName,
  shape = "plane",
  position1 = [0, 0, 0],
  pitch = 11,
}: PanoPhotoProps) {
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);

  const [texture, setTexture] =
    useState<THREE.Texture | null>(null);

  const audio = useAudio();

  // ==============================
  // KEYBOARD
  // ==============================

  const keys = useKeyboard();

  const isPressed =
    keys[triggerKey.toLowerCase() as keyof typeof keys];

  // ==============================
  // IMAGE TEXTURE
  // ==============================

  useEffect(() => {
    const loader = new THREE.TextureLoader();

    const loadedTexture = loader.load(
      `/${imageName}`,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;

        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;

        setTexture(texture);
      },
      undefined,
      (error) => {
        console.error(
          `Slika "${imageName}" nije mogla da se učita:`,
          error
        );
      }
    );

    return () => {
      loadedTexture.dispose();
      setTexture(null);
    };
  }, [imageName]);

  // ==============================
  // NOISE
  // ==============================

  useEffect(() => {
    if (isPressed) {
      audio?.startSynth(pitch);
    } else {
      audio?.stopSynth();
    }

    return () => {
      audio?.stopSynth();
    };
  }, [isPressed, audio, pitch]);

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