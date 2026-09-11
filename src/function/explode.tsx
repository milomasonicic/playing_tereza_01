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





export function explode1({
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
    const radius = 15;

const theta = Math.random() * Math.PI * 2;
const phi = Math.acos(2 * Math.random() - 1);

const x = Math.sin(phi) * Math.cos(theta);
const y = Math.cos(phi);
const z = Math.sin(phi) * Math.sin(theta);

positions[i3] = x * radius;
positions[i3 + 1] = y * radius;
positions[i3 + 2] = z * radius;

const direction1 = new THREE.Vector3(x, y, z);

// radialna brzina
const radialSpeed = 22;

// rotacija oko Y ose
const tangent = new THREE.Vector3(
  -z,
  0,
  x
).normalize();

velocities[i3] =
  direction1.x * radialSpeed +
  tangent.x * 3;

velocities[i3 + 1] =
  direction1.y * radialSpeed;

velocities[i3 + 2] =
  direction1.z * radialSpeed +
  tangent.z * 3;

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





export function explode2({
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

    const radius = 115;

const theta = Math.random() * Math.PI * 2;
const phi = Math.acos(2 * Math.random() - 1);

const x = Math.sin(phi) * Math.cos(theta);
const y = Math.cos(phi);
const z = Math.sin(phi) * Math.sin(theta);

positions[i3] = x * radius;
positions[i3 + 1] = y * radius;
positions[i3 + 2] = z * radius;

const direction1 = new THREE.Vector3(x, y, z);

// radialna brzina
const radialSpeed = 111;

// rotacija oko Y ose
const tangent = new THREE.Vector3(
  -z,
  0,
  x
).normalize();

velocities[i3] =
  direction1.x * radialSpeed +
  tangent.x * 3;

velocities[i3 + 1] =
  direction1.y * radialSpeed;

velocities[i3 + 2] =
  direction1.z * radialSpeed +
  tangent.z * 3;
   
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



export function explode3({
  points,
  positions,
  velocities,
  count,
  minSpeed,
  maxSpeed,
}: ExplodeParams) {
  const positionAttribute =
    points.geometry.attributes.position;

  const min = Math.min(minSpeed, maxSpeed);
  const max = Math.max(minSpeed, maxSpeed);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;

    const t = Math.random() * Math.PI * 6;

    // DNA spiral
    const radius = 70;

    // dve suprotne spirale
    const side = i % 2 === 0 ? 1 : -1;

    const x =
      Math.cos(t) * radius * side;

    const z =
      Math.sin(t) * radius * side;

    const y =
      (t / (Math.PI * 6) - 0.5) * 150;

    // mali random offset
    positions[i3] =
      x + (Math.random() - 0.5) * 10;

    positions[i3 + 1] =
      y + (Math.random() - 0.5) * 10;

    positions[i3 + 2] =
      z + (Math.random() - 0.5) * 10;

    // smer od centra
    const direction =
      new THREE.Vector3(
        x,
        y * 0.3,
        z
      ).normalize();

    const speed =
      Math.random() * (max - min) + min;

    velocities[i3] =
      direction.x * speed;

    velocities[i3 + 1] =
      direction.y * speed;

    velocities[i3 + 2] =
      direction.z * speed;
  }

  positionAttribute.needsUpdate = true;
}


export function explode4({
  points,
  positions,
  velocities,
  count,
  minSpeed,
  maxSpeed,
}: ExplodeParams) {
  const positionAttribute =
    points.geometry.attributes.position;

  const min = Math.min(minSpeed, maxSpeed);
  const max = Math.max(minSpeed, maxSpeed);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;

    const angle =
      Math.random() * Math.PI * 2;

    const radius =
      Math.random() * 80;

    const height =
      (Math.random() - 0.5) * 120;

    const x =
      Math.cos(angle) * radius;

    const z =
      Math.sin(angle) * radius;

    const y = height;

    positions[i3] = x;
    positions[i3 + 1] = y;
    positions[i3 + 2] = z;

    // radial + upward movement
    const direction =
      new THREE.Vector3(
        x,
        y * 0.4,
        z
      ).normalize();

    const speed =
      Math.random() * (max - min) + min;

    velocities[i3] =
      direction.x * speed;

    velocities[i3 + 1] =
      direction.y * speed + 20;

    velocities[i3 + 2] =
      direction.z * speed;
  }

  positionAttribute.needsUpdate = true;
}




export function explode6({
  points,
  positions,
  velocities,
  count,
  minSpeed,
  maxSpeed,
}: ExplodeParams) {
  const positionAttribute =
    points.geometry.attributes.position;

  const min = Math.min(minSpeed, maxSpeed);
  const max = Math.max(minSpeed, maxSpeed);

  const maxRadius = 130;

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;

    // udaljenost od centra
    const radius =
      Math.pow(Math.random(), 0.6) * maxRadius;

    // spiralni ugao
    const angle =
      radius * 0.09 +
      Math.random() * Math.PI * 2;

    // malo debljine spirale
    const spread =
      (Math.random() - 0.5) *
      Math.max(2, radius * 0.15);

    const x =
      Math.cos(angle) * radius + spread;

    const z =
      Math.sin(angle) * radius + spread;

    const y =
      (Math.random() - 0.5) *
      (10 + radius * 0.15);

    positions[i3] = x;
    positions[i3 + 1] = y;
    positions[i3 + 2] = z;

    // radialni smer
    const radial =
      new THREE.Vector3(
        x,
        y * 0.3,
        z
      ).normalize();

    // tangencijalni smer
    const tangent =
      new THREE.Vector3(
        -z,
        0,
        x
      ).normalize();

    const speed =
      Math.random() * (max - min) + min;

    // kombinujemo:
    // 70% rotacija
    // 30% širenje
    velocities[i3] =
      tangent.x * speed * 0.7 +
      radial.x * speed * 0.3;

    velocities[i3 + 1] =
      radial.y * speed * 0.3;

    velocities[i3 + 2] =
      tangent.z * speed * 0.7 +
      radial.z * speed * 0.3;
  }

  positionAttribute.needsUpdate = true;
}



export function explode7({
  points,
  positions,
  velocities,
  count,
  minSpeed,
  maxSpeed,
}: ExplodeParams) {
  const positionAttribute =
    points.geometry.attributes.position;

  const min = Math.min(minSpeed, maxSpeed);
  const max = Math.max(minSpeed, maxSpeed);

  const arms = 8;
  const radius = 120;

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;

    const arm =
      Math.floor(Math.random() * arms);

    const baseAngle =
      (arm / arms) * Math.PI * 2;

    const angle =
      baseAngle +
      (Math.random() - 0.5) * 0.25;

    const r =
      Math.pow(Math.random(), 0.45) * radius;

    positions[i3] =
      Math.cos(angle) * r;

    positions[i3 + 1] =
      (Math.random() - 0.5) * 25;

    positions[i3 + 2] =
      Math.sin(angle) * r;

    const direction =
      new THREE.Vector3(
        positions[i3],
        positions[i3 + 1] * 0.4,
        positions[i3 + 2]
      ).normalize();

    const speed =
      Math.random() * (max - min) + min;

    velocities[i3] =
      direction.x * speed;

    velocities[i3 + 1] =
      direction.y * speed;

    velocities[i3 + 2] =
      direction.z * speed;
  }

  positionAttribute.needsUpdate = true;
}