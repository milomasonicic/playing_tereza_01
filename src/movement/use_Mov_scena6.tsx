import { useFrame } from "@react-three/fiber";
import { RefObject } from "react";
import { Points } from "three";
import * as THREE from "three";

export function useM1(
  pointsRef: RefObject<Points | null>,
  active: RefObject<boolean>,
  velocitiesRef: Float32Array
) {
  useFrame(({ clock }, delta) => {
    const points = pointsRef.current;

    if (!points) return;
    if (!active.current) return;

    const position =
      points.geometry.attributes.position;

    const array =
      position.array as Float32Array;

    const time =
      clock.getElapsedTime();

    // ==========================================
    // ROTACIJA CELOG SISTEMA
    // ==========================================

    points.rotation.y += delta * 2;

    // ==========================================
    // PULSE
    // ==========================================

    for (
      let i = 0;
      i < array.length;
      i += 3
    ) {
      const x = array[i];
      const y = array[i + 1];
      const z = array[i + 2];

      const radius =
        Math.sqrt(
          x * x +
          y * y +
          z * z
        );

      if (radius < 0.001)
        continue;

      // ========================================
      // PULS
      // ========================================

      const pulse =
        1 +
        Math.tan(
          time * 5 - radius * 0.8
        ) * 0.12;

      // ========================================
      // NORMALIZOVAN RADIJALNI VEKTOR
      // ========================================

      const nx = x / radius;
      const ny = y / radius;
      const nz = z / radius;

      // ========================================
      // GURANJE ČESTICE KA SPOLJA/UNUTRA
      // ========================================

      const targetRadius =
        radius * pulse;

      const targetX =
        nx * targetRadius;

      const targetY =
        ny * targetRadius;

      const targetZ =
        nz * targetRadius;

      // ========================================
      // GLATKO KRETANJE
      // ========================================

      const smooth =
        THREE.MathUtils.clamp(
          delta * 8,
          0,
          1
        );

      array[i] =
        THREE.MathUtils.lerp(
          x,
          targetX,
          smooth
        );

      array[i + 1] =
        THREE.MathUtils.lerp(
          y,
          targetY,
          smooth
        );

      array[i + 2] =
        THREE.MathUtils.lerp(
          z,
          targetZ,
          smooth
        );
    }

    position.needsUpdate = true;
  });
}

