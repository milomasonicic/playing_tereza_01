import * as THREE from "three";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useAudio } from "../audio/AudioProvider";
import "../shaders/shader2";
import { useM101 } from "../movement/useMov_scena1";

type SoundProps = {
  triggerKey: string;
  position1?: [number, number, number];
  sound?: string;
};

export default function Sound({
  triggerKey,
  position1 = [0, 0, 0],
  sound = "outer",
}: SoundProps) {
  const materialRef = useRef<any>(null);

  const audio = useAudio();

  // 0 = invisible
  // 1 = visible
  const active = useRef(0);
  const linesRef = useRef<THREE.LineSegments>(null);
  const keyDown = useRef(false);

  useM101(linesRef, keyDown);

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

  // ==========================================
  // GEOMETRY
  // ==========================================

const points: THREE.Vector3[] = [];

const numberOfLines = 18;
const spacing = 1.2;

for (let i = 0; i < numberOfLines; i++) {
  const y =
    (i - (numberOfLines - 1) / 2) * spacing;

  points.push(
    new THREE.Vector3(-5, y, 0),
    new THREE.Vector3(5, y, 0)
  );
}

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
    />
  </lineSegments>
  );
}