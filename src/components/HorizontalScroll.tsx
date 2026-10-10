import PanoNoise03 from "./pano_05";
import { useRef } from "react";
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

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y += delta * rotationSpeed;
  });

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
