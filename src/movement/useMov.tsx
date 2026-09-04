import { useFrame } from "@react-three/fiber";
import { RefObject } from "react";
import { Points } from "three";

export function useM(
  pointsRef: RefObject<Points | null>,
  active: RefObject<boolean>
) {
  useFrame((_, delta) => {
    if (!pointsRef.current) return;

    if (!active.current) return;

    pointsRef.current.rotation.y += delta * 3;
  });
}