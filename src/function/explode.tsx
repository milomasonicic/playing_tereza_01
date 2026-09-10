import * as THREE from "three";

import type { ExplodeParams } from "./explode_types";


export function explode({
  points,
  positions,
  velocities,
  count,
  minSpeed,
  maxSpeed,
  getDirection,
}: ExplodeParams) {
  const positionAttribute =
    points.geometry.attributes.position;

  const min = Math.min(minSpeed, maxSpeed);
  const max = Math.max(minSpeed, maxSpeed);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;

    const size = 14;
    const half = size / 2;

    const edge = Math.floor(
      Math.random() * 12
    );

    const t =
      (Math.random() - 0.5) * size;

    const h =
      Math.random() < 0.5
        ? -half
        : half;

    switch (edge) {
      // X edges
      case 0:
        positions[i3] = t;
        positions[i3 + 1] = h;
        positions[i3 + 2] = h;
        break;

      case 1:
        positions[i3] = t;
        positions[i3 + 1] = h;
        positions[i3 + 2] = -h;
        break;

      case 2:
        positions[i3] = t;
        positions[i3 + 1] = -h;
        positions[i3 + 2] = h;
        break;

      case 3:
        positions[i3] = t;
        positions[i3 + 1] = -h;
        positions[i3 + 2] = -h;
        break;

      // Y edges
      case 4:
        positions[i3] = h;
        positions[i3 + 1] = t;
        positions[i3 + 2] = h;
        break;

      case 5:
        positions[i3] = h;
        positions[i3 + 1] = t;
        positions[i3 + 2] = -h;
        break;

      case 6:
        positions[i3] = -h;
        positions[i3 + 1] = t;
        positions[i3 + 2] = h;
        break;

      case 7:
        positions[i3] = -h;
        positions[i3 + 1] = t;
        positions[i3 + 2] = -h;
        break;

      // Z edges
      case 8:
        positions[i3] = h;
        positions[i3 + 1] = h;
        positions[i3 + 2] = t;
        break;

      case 9:
        positions[i3] = h;
        positions[i3 + 1] = -h;
        positions[i3 + 2] = t;
        break;

      case 10:
        positions[i3] = -h;
        positions[i3 + 1] = h;
        positions[i3 + 2] = t;
        break;

      case 11:
        positions[i3] = -h;
        positions[i3 + 1] = -h;
        positions[i3 + 2] = t;
        break;
    }

    // DIRECTION
    const direction = getDirection();

    // SPEED
    const speed =
      Math.random() * (max - min) + min;

    // VELOCITY
    velocities[i3] =
      direction.x * speed;

    velocities[i3 + 1] =
      direction.y * speed;

    velocities[i3 + 2] =
      direction.z * speed;
  }

  positionAttribute.needsUpdate = true;
}