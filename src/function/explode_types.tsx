import * as THREE from "three";

export interface ExplodeParams {
  points: THREE.Points;
  positions: Float32Array;
  velocities: Float32Array;
  count: number;
  minSpeed: number;
  maxSpeed: number;
  getDirection: () => {
    x: number;
    y: number;
    z: number;
  };
}