import { useFrame } from "@react-three/fiber";
import { RefObject } from "react";
import { LineSegments } from "three";
import * as THREE from "three";

export function useM111(
  linesRef: RefObject<LineSegments | null>,
  active: RefObject<boolean>,
  sirenje:number
) {
  useFrame((_, delta) => {
    const lines = linesRef.current;

    if (!lines) return;

    // ==========================================
    // SCALE ANIMATION
    // ==========================================

    const targetScale = active.current ? sirenje : 1;

    lines.scale.y = THREE.MathUtils.lerp(
      lines.scale.y,
      targetScale,
      delta * 5
    );

    // ==========================================
    // ROTACIJA OKO Y OSE
    // ==========================================

    lines.rotation.y += delta * 1.0;
  });
}