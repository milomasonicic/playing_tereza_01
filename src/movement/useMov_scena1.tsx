import { useFrame } from "@react-three/fiber";
import { RefObject } from "react";
import { LineSegments } from "three";
import * as THREE from "three";

export function useM101(
  linesRef: RefObject<LineSegments | null>,
  active: RefObject<boolean>
) {
  useFrame((_, delta) => {
    const lines = linesRef.current;

    if (!lines) return;

    // ==========================================
    // SCALE ANIMATION
    // ==========================================

    const targetScale = active.current ? 8 : 1;

    lines.scale.x = THREE.MathUtils.lerp(
      lines.scale.x,
      targetScale,
      delta * 5
    );

    // ==========================================
    // ROTACIJA - ako želiš
    // ==========================================

    // lines.rotation.z += delta * 0.1;
  });
}