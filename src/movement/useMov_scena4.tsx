import { useFrame } from "@react-three/fiber";
import { RefObject } from "react";
import { Points } from "three";
import * as THREE from "three";

export function useM(
  pointsRef: RefObject<Points | null>,
  active: RefObject<boolean>,
  velocitiesRef: Float32Array
) {

  useFrame(({ clock }, delta) => {

    const points = pointsRef.current;
    const velocities = velocitiesRef;

    if (!points) return;
    if (!velocities) return;
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

    //points.rotation.y += delta * 3;


    // ==========================================
    // SPIRALNO UVIJANJE
    // ==========================================

    for (
      let i = 0;
      i < array.length;
      i += 3
    ) {

      const x = array[i];
      const y = array[i + 1];
      const z = array[i + 2];


      // udaljenost od centra
      const radius =
        Math.sqrt(
          x * x +
          y * y +
          z * z
        );


      if (radius < 0.001)
        continue;


      // ========================================
      // ŠTO JE DALJE → JAČE UVIJANJE
      // ========================================

      const twist =
        radius * 0.003;


      // trenutni položaj
      const angle =
        Math.atan2(y, x);


      const newAngle =
        angle + twist;


      // ========================================
      // SPIRALA
      // ========================================

      const newX =
        Math.cos(newAngle) *
        radius;

      const newY =
        Math.sin(newAngle) *
        radius;


      array[i] =
        THREE.MathUtils.lerp(
          x,
          newX,
          delta * 15
        );

      array[i + 1] =
        THREE.MathUtils.lerp(
          y,
          newY,
          delta * 15
        );


      // ========================================
      // MALO Z TALASANJE
      // ========================================

      array[i + 2] =
        z +
        Math.sin(
          time * 5 +
          radius * 0.1
        ) *
        0.03;

    }


    position.needsUpdate = true;

  });
}