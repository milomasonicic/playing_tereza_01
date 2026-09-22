import * as THREE from "three";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useAudio } from "../audio/AudioProvider";
import "../shaders/shader2";
import { useM101 } from "../movement/useMov_scena1";
import { useM111 } from "../movement/useMov_try3";

type SoundProps = {
  triggerKey: string;
  position1?: [number, number, number];
  sound?: string;
  color1?: [number, number, number];
  color2?: [number, number, number];
};

export default function Sound33({
  triggerKey,
  position1 = [0, 0, 0],
  sound = "outer",
  color1 = [0.015, 0.035, 0.20],
  color2 = [0.75, 0.06, 0.32],

}: SoundProps) {
  const materialRef = useRef<any>(null);

  const audio = useAudio();

  // 0 = invisible
  // 1 = visible
  const active = useRef(0);
  const linesRef = useRef<THREE.LineSegments>(null);
  const keyDown = useRef(false);

  useM111(linesRef, keyDown);

  const playSound = () => {
    if (!audio) return;

    audio.playSound(sound);
  };

  // ==========================================
  // KEYBOARD
  // ==========================================

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.repeat) return;

      if (
        event.key.toLowerCase() ===
        triggerKey.toLowerCase()
      ) {
        console.log("KEY DOWN:", triggerKey);

        keyDown.current = true;

        playSound();
      
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (
        event.key.toLowerCase() ===
        triggerKey.toLowerCase()
      ) {
        console.log("KEY UP:", triggerKey);

        keyDown.current = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      window.removeEventListener(
        "keyup",
        handleKeyUp
      );
    };
  }, [triggerKey, sound, audio]);

  // ==========================================
  // SHADER ANIMATION
  // ==========================================

  useFrame((state, delta) => {
    if (!materialRef.current) return;

    // ------------------------------------------
    // 0 → 1 dok držiš tipku
    // 1 → 0 kad pustiš
    // ------------------------------------------

    if (keyDown.current) {
      active.current += delta * 2.0;
    } else {
      active.current -= delta * 2.0;
    }

    active.current = THREE.MathUtils.clamp(
      active.current,
      0,
      1
    );

    // ------------------------------------------
    // SET uActive
    // ------------------------------------------

    materialRef.current.uniforms.uActive.value =
      active.current;

    // ------------------------------------------
    // SET uTime
    // ------------------------------------------

    materialRef.current.uniforms.uTime.value =
      state.clock.elapsedTime;

    // DEBUG
    // console.log(active.current);
  });

  const points: THREE.Vector3[] = [];

const s = 3; // pola veličine kocke

const vertices = [
  new THREE.Vector3(-s, -s, -s), // 0
  new THREE.Vector3( s, -s, -s), // 1
  new THREE.Vector3( s,  s, -s), // 2
  new THREE.Vector3(-s,  s, -s), // 3

  new THREE.Vector3(-s, -s,  s), // 4
  new THREE.Vector3( s, -s,  s), // 5
  new THREE.Vector3( s,  s,  s), // 6
  new THREE.Vector3(-s,  s,  s), // 7
];

// prednja strana
points.push(vertices[0], vertices[1]);
points.push(vertices[1], vertices[2]);
points.push(vertices[2], vertices[3]);
points.push(vertices[3], vertices[0]);

// zadnja strana
points.push(vertices[4], vertices[5]);
points.push(vertices[5], vertices[6]);
points.push(vertices[6], vertices[7]);
points.push(vertices[7], vertices[4]);

// spojevi prednje i zadnje strane
points.push(vertices[0], vertices[4]);
points.push(vertices[1], vertices[5]);
points.push(vertices[2], vertices[6]);
points.push(vertices[3], vertices[7]);

const geometry =
  new THREE.BufferGeometry().setFromPoints(points);

  return (
     <lineSegments
       ref={linesRef}
     position={position1}>
    <primitive
      object={geometry}
      attach="geometry"
    />

    <twistMaterial2
      ref={materialRef}
      transparent
      depthWrite={false}
     uColor1={color1}
     uColor2={color2}
    />
  </lineSegments>
  );
}