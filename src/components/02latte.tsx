import * as THREE from "three";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { HipiMaterial1 } from "../shaders/Shader11";
import { Mesh, Group } from "three";
import { useLatteMove } from "../movement/useMov_latte";

interface LatteProps {
  triggerKey?: string;
  position?: [number, number, number];
}

export default function LatteGeo({
  triggerKey = "g",
  position = [0, 0, 0],
}: LatteProps) {
    
  const meshRef = useRef<Mesh>(null);
  const materialRef = useRef<any>(null);
  const rigRef = useRef<Group>(null);
   const active =
  useRef(0);

  const keyDown = useRef(false);

  // Vrijednost wave triggera
  const waveValue = useRef(0);

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      if (key !== triggerKey) return;
      if (keyDown.current) return;

      keyDown.current = true;

      // Pokreni animaciju
      waveValue.current = 0;
    };

    const up = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      if (key === triggerKey) {
        keyDown.current = false;
      }
    };

    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);

    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, [triggerKey]);

  useFrame((_, delta) => {
    if (!materialRef.current) return;

    // 0 -> 1 za približno 1 sekundu
    waveValue.current = THREE.MathUtils.lerp(
      waveValue.current,
      1,
      1 - Math.exp(-delta * 2)
    );

    materialRef.current.uWaveTrigger = waveValue.current;

     if (keyDown.current) {

    // tipka pritisnuta → pali shader
    active.current += delta * 1.0;

  } else {

    // tipka puštena → gasi shader
    active.current -= delta * 1.0;

  }

  active.current = THREE.MathUtils.clamp(
      active.current,
      0,
      1
    );

     materialRef.current.uActive =
    active.current;
    
  });

  useLatteMove(
  rigRef,
  active
);

  return (
    <group
      ref={rigRef}
      position={position}
    >
      <mesh
  ref={meshRef}
  scale={14.55}
>
  <latheGeometry
    args={[
      [
        new THREE.Vector2(1.00, -0.65),
        new THREE.Vector2(0.10, -0.64),
        new THREE.Vector2(0.17, -0.58),
        new THREE.Vector2(0.20, -0.48),

      ],
      4,
    ]}
  />

  <hipiMaterial1
    ref={materialRef}
    wireframe
    transparent
  />
</mesh>
    </group>
  );
}