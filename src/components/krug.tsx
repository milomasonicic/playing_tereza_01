import * as THREE from "three";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useAudio } from "../audio/AudioProvider";
import { TwistMaterial11 } from "../shaders/shader02";

interface KrugProps {
  position?: [number, number, number];

  triggerKey1?: string;

  type?: number;

  sound?: string;

  color?: [number, number, number];

  intensity?: number;

  radius?: number;
}

export default function Krug({
  position = [0, 0, 0],

  triggerKey1 = "g",

  type = 1,

  sound = "outer",

  color = [0.08, 0.32, 0.45],

  intensity = 2.0,

  radius = 1,
}: KrugProps) {

  // ==========================================
  // REFS
  // ==========================================

  const materialRef =
    useRef<any>(null);

  const keyDown =
    useRef(false);

  const active =
    useRef(0);

  const audio = useAudio();

  const circleRef =
  useRef<THREE.Mesh>(null);


  // ==========================================
  // SOUND
  // ==========================================

  const playSound = () => {

    if (!audio)
      return;

    audio.playSound(sound);

  };


  // ==========================================
  // KEYBOARD
  // ==========================================

  useEffect(() => {

    const down =
      (event: KeyboardEvent) => {

        const key =
          event.key.toLowerCase();


        if (
          key !== triggerKey1
        ) {
          return;
        }


        // spriječi ponavljanje sounda
        // dok se tipka drži

        if (
          keyDown.current
        ) {
          return;
        }


        keyDown.current =
          true;


        // zvuk samo jednom
        playSound();

      };


    const up =
      (event: KeyboardEvent) => {

        const key =
          event.key.toLowerCase();


        if (
          key !== triggerKey1
        ) {
          return;
        }


        keyDown.current =
          false;

      };


    window.addEventListener(
      "keydown",
      down
    );

    window.addEventListener(
      "keyup",
      up
    );


    return () => {

      window.removeEventListener(
        "keydown",
        down
      );

      window.removeEventListener(
        "keyup",
        up
      );

    };

  }, [
    triggerKey1,
    sound,
    audio,
  ]);


  // ==========================================
  // ANIMATION
  // ==========================================

  useFrame((_, delta) => {

    if (
      !materialRef.current
    ) {
      return;
    }


    // ========================================
    // SHADER TIME
    // ========================================

    materialRef.current.uTime +=
      delta;


    materialRef.current.uType =
      type;


    materialRef.current.uColor =
      color;


    materialRef.current.uIntensity =
      intensity;


    // ========================================
    // ACTIVE
    // ========================================

    if (
      keyDown.current
    ) {

      active.current +=
        delta * 5.0;

    } else {

      active.current -=
        delta * 5.0;

    }


    active.current =
      THREE.MathUtils.clamp(
        active.current,
        0,
        1
      );


    materialRef.current.uActive =
      active.current;

  });


  // ==========================================
  // RETURN
  // ==========================================

  return (

   <mesh ref={circleRef} position={position}>

    <ringGeometry
        args={[
        radius * 0.88, // unutarnji radius
        radius,       // vanjski radius
        64             // segmenti
        ]}
    />

    <twistMaterial11
        ref={materialRef}  
        transparent
    />

    </mesh>

  );

}
