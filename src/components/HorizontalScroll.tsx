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

export default function HorizontallScroll() {
  const groupRef = useRef<THREE.Group>(null);

  // =========================
  // PODESAVANJA
  // =========================

  // Brzina rotacije
  const rotationSpeed = 1.5;

  // Veličina kruga
  const radius = 120;

  // Veličina panoa
  const panoWidth = 55;
  const panoHeight = 55;

  // =========================
  // ANIMACIJA
  // =========================

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
              position1={[0, -40, 0]}
            />
          </group>
        );
      })}

    </group>
  );
}
