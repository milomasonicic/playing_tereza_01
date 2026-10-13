import { useFrame } from "@react-three/fiber";
import { RefObject } from "react";
import * as THREE from "three";

export function useRotateY(
  meshRef: RefObject<THREE.Mesh | null>,
  active: boolean,
  speed = 1110.5
) {
  useFrame((_, delta) => {
    if (!meshRef.current || !active) return;

    meshRef.current.rotation.y += speed * delta;
  });
}