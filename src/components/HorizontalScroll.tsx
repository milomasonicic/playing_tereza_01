import PanoNoise03 from "./pano_05";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PANOS = [
  "m100aa.webm",
  "m131aa.webm",
  "m131aa.webm",
  "m131aa.webm",
  "m131aa.webm",
  "m131aa.webm",
  "m131aa.webm",
  "m131aa.webm",
  "m131aa.webm",
  "m131aa.webm",
  "m131aa.webm",
  "m131aa.webm",
  "m131aa.webm",
  "m131aa.webm",
  "m131aa.webm",
  "m131aa.webm",
];

interface HorizontallScrollProps {
  rotationSpeed?: number;
  radius?: number;
  panoWidth?: number;
  panoHeight?: number;
  position1?: [number, number, number];
}

export default function HorizontallScroll({
  rotationSpeed = 0.25,
  radius = 220,
  panoWidth = 95,
  panoHeight = 95,
  position1 = [0, -50, 0],
}: HorizontallScrollProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Da li je cijeli element vidljiv
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Q = pojavi
      if (event.code === "KeyQ") {
        setIsVisible(true);
      }

      // W = nestani
      if (event.code === "KeyW") {
        setIsVisible(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Rotacija samo dok je element vidljiv
    if (isVisible) {
      groupRef.current.rotation.y += delta * rotationSpeed;
    }
  });

  // Ako nije vidljivo, ne renderujemo ništa
  if (!isVisible) {
    return null;
  }

  return (
    <group ref={groupRef}>
      {PANOS.map((videoName, index) => {
        const angle =
          (index / PANOS.length) * Math.PI * 2;

        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;

        return (
          <group
            key={index}
            position={[x, 0, z]}
            rotation={[0, angle, 0]}
          >
            <PanoNoise03
              videoName={videoName}
              width={panoWidth}
              height={panoHeight}
              shape="plane"
              position1={position1}
            />
          </group>
        );
      })}
    </group>
  );
}
