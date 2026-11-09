
import * as THREE from "three";
import { useRef, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useAudio } from "../audio/AudioProvider";
import "../shaders/shader2";
import { useM111 } from "../movement/useMov_try3";

type SoundProps = {
  triggerKey: string;

  position1?: [number, number, number];
  rotation1?: [number, number, number];

  sound?: string;
  color1?: [number, number, number];
  color2?: [number, number, number];
  sirenje?: number;

  width?: number;
  height?: number;

  horizontalCount?: number;
  verticalCount?: number;

  horizontalOffset?: number;
  verticalOffset?: number;

  lineZ?: number;

  horizontalEnabled?: boolean;
  verticalEnabled?: boolean;
};

export default function Sound44({
  triggerKey,
  position1 = [0, 0, 0],
  rotation1 = [0, 0, 0],
  sound = "outer",
  color1 = [0.015, 0.035, 0.20],
  color2 = [0.75, 0.06, 0.32],
  sirenje = 2,
   width = 16,
  height = 34,

  horizontalCount = 18,
  verticalCount = 26,

  horizontalOffset = 0,
  verticalOffset = 0,

  lineZ = 0,

  horizontalEnabled = true,
  verticalEnabled = true,
}: SoundProps) {

  const materialRef = useRef<any>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const audio = useAudio();

  const active = useRef(0);
  const keyDown = useRef(false);

  ////useM111(linesRef, keyDown, sirenje);

  const playSound = () => {
    if (!audio) return;
    audio.playSound(sound);
  };

  // KEYBOARD





  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.repeat) return;

      if (event.key.toLowerCase() === triggerKey.toLowerCase()) {
        keyDown.current = true;
        playSound();
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === triggerKey.toLowerCase()) {
        keyDown.current = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [triggerKey, sound, audio]);

  // 2D LINES GEOMETRY
  
const geometry = useMemo(() => {
  const points: THREE.Vector3[] = [];

  // HORIZONTAL LINES
  if (horizontalEnabled) {
    for (let i = 0; i <= horizontalCount; i++) {

      const y =
        -height / 2 +
        (height / horizontalCount) * i +
        horizontalOffset;

      points.push(
        new THREE.Vector3(-width / 2, y, lineZ),
        new THREE.Vector3(width / 2, y, lineZ)
      );
    }
  }

  // VERTICAL LINES
  if (verticalEnabled) {
    for (let i = 0; i <= verticalCount; i++) {

      const x =
        -width / 2 +
        (width / verticalCount) * i +
        verticalOffset;

      points.push(
        new THREE.Vector3(x, -height / 2, lineZ),
        new THREE.Vector3(x, height / 2, lineZ)
      );
    }
  }

  return new THREE.BufferGeometry().setFromPoints(points);

}, [
  width,
  height,
  horizontalCount,
  verticalCount,
  horizontalOffset,
  verticalOffset,
  lineZ,
  horizontalEnabled,
  verticalEnabled
]);


  // SHADER ANIMATION
  useFrame((state, delta) => {
    if (!materialRef.current) return;

    if (keyDown.current) {
      active.current += delta * 2;
    } else {
      active.current -= delta * 2;
    }

    active.current = THREE.MathUtils.clamp(
      active.current,
      0,
      1
    );

    materialRef.current.uniforms.uActive.value = active.current;
    materialRef.current.uniforms.uTime.value =
      state.clock.elapsedTime;
  });

  return (
    <lineSegments
      ref={linesRef}
      position={position1}
      rotation={rotation1}
      geometry={geometry}
    >
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
