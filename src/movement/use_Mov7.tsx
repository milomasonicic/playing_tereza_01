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

          // ROTACIJA
  points.rotation.y += delta * 1.5;
  points.rotation.x += delta * 0.35;

    // ==========================================
    // IMPLOSION
    // ==========================================

    const cycle = 0.5;

    const phase =
      (time % cycle) / cycle;


    // 0 -> 1 -> 0
    const pulse =
      Math.sin(phase * Math.PI);


    // ==========================================
    // KOLIKO JAKO VUČEMO KA CENTRU
    // ==========================================

    const strength =
      pulse * pulse;


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
      // SMER KA CENTRU
      // ========================================

      const dirX = -x / radius;
      const dirY = -y / radius;
      const dirZ = -z / radius;


      // ========================================
      // ŠTO JE DALJE OD CENTRA
      // TO JE JAČE VUČENJE
      // ========================================

      const force =
        strength *
        radius *
        8;


      velocities[i] +=
        dirX *
        force *
        delta;

      velocities[i + 1] +=
        dirY *
        force *
        delta;

      velocities[i + 2] +=
        dirZ *
        force *
        delta;


      // ========================================
      // DAMPING
      // ========================================

      velocities[i] *=
        Math.exp(-5 * delta);

      velocities[i + 1] *=
        Math.exp(-5 * delta);

      velocities[i + 2] *=
        Math.exp(-5 * delta);


      // ========================================
      // POSITION
      // ========================================

      array[i] +=
        velocities[i] * delta;

      array[i + 1] +=
        velocities[i + 1] * delta;

      array[i + 2] +=
        velocities[i + 2] * delta;

    }


    position.needsUpdate = true;

  });
}