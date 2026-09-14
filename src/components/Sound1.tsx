import * as THREE from "three";
import { useRef } from "react";

import { TwistMaterial2 } from "../shaders/shader2";

export default function Sound() {
  const materialRef = useRef<any>(null);

  const points = [
    new THREE.Vector3(-0.5, -0.5, 0),
    new THREE.Vector3(0.5, -0.5, 0),
    new THREE.Vector3(0.5, 0.5, 0),
    new THREE.Vector3(-0.5, 0.5, 0),
    new THREE.Vector3(-0.5, -0.5, 0),
  ];

  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line>
      <primitive object={geometry} attach="geometry" />

      <twistMaterial2
        ref={materialRef}
        uActive={1}
        transparent
      />
    </line>
  );
}
