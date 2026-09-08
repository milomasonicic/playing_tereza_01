import { useFrame } from "@react-three/fiber";
import { RefObject } from "react";
import { Group } from "three";

export function useLatteMove(
  rigRef: RefObject<Group | null>,
  active: RefObject<number>,
  rotationSpeed: [number, number, number] = [2.5, 1.0, 0.2]
) {
  useFrame((_, delta) => {
    const rig = rigRef.current;

    if (!rig) return;

    // ==========================================
    // ROTACIJA
    // ==========================================

    rig.rotation.y +=
      delta * rotationSpeed[0];

   

   
  });
}