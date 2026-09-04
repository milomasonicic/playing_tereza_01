import * as THREE from "three";
import { useMemo, useRef, useCallback, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { TwistMaterial11 } from "../shaders/shader02";
import { useAudio } from "../audio/AudioProvider";
import { useM } from "../movement/useMov_scena4";

interface ExplosionProps {

  count?: number;

  maxRadius?: number;

  minSpeed?: number;
  maxSpeed?: number;

  spread?: number;

  width?: number;
  height?: number;
  depth?: number;

  position?: [number, number, number];

  triggerKey1?: string;

  type?: number;

  sound?: string;
  color?: [number, number, number];
  intensity?: number;
}

export default function Explosion({

  count = 100,

  maxRadius = 4.5,

  minSpeed = 0.4,
  maxSpeed = 2.6,

  spread = 17.825,

  width = 2,
  height = 1,
  depth = 0.5,

  position = [0, 0, 0],

  triggerKey1 = "g",

  type = 1,

  sound ="outer",
   color = [0.08, 0.32, 0.45],
  intensity = 2.0,

}: ExplosionProps){


/// ovo je use M funkcija 
/*
const mesh = useRef<THREE.Mesh>(null);
const movingUp = useRef(false);
const rigRef = useRef<THREE.Group>(null);
const rigRef1 = useRef<THREE.Group>(null);
const movingRig = useRef(false);
const kick = useRef(false);
const tox = useRef(false);
const leftKey1 = useRef(false);

const rotating = useRef(false);
const rightKey1 = useRef(false);
const wildSpin = useRef(false);
*/

   /// ovo je je particle sistem  
  const pointsRef =
    useRef<THREE.Points>(null);

  const materialRef =
    useRef<any>(null);

  const exploded =
    useRef(false);

  const keyDown =
    useRef(false);

  const audio = useAudio();  


  const playSound = () => {
  if (!audio) return;

  audio.playSound(sound);
};
  
const particles = useMemo(() => {

  return {
    positions: new Float32Array(count * 3),
    velocities: new Float32Array(count * 3),
     colors:
      new Float32Array(count * 3),
  };

}, [count]);


  const positions = useMemo(() => {

    const array = new Float32Array(count * 3);

    return array;

  }, []);


   const min =
    Math.min(
      minSpeed,
      maxSpeed
    );

  const max =
    Math.max(
      minSpeed,
      maxSpeed
    );


    const getDirection =
    useCallback(() => {

      const side =
        Math.floor(
          Math.random() * 14
        );


      let x = 0;
      let y = 0;
      let z = 0;


      //svi use m pa ce mi nesto trebat i hope




      // ======================================
      // GORE
      // ======================================

      if (
        side === 0
      ) {

        y =
          height * depth;

        x =
          (Math.random() - 0.5) *
          spread *
          depth;

        z =
          (Math.random() - 0.5) *
          spread *
          depth;

      }


      // ======================================
      // DOLE
      // ======================================

      else if (
        side === 1
      ) {

        y =
          +depth;

        x =
          (Math.random() - 0.35) *
          spread *
          depth;

        z =
          (Math.random() - 2.5) *
          spread *
          depth;

      }


      // ======================================
      // LIJEVO
      // ======================================

      else if (
        side === 2
      ) {

        x =
          +width;

        y =
          (Math.random() - 0.25) *
          spread *
          width;

        z =
          (Math.random() - 0.35) *
          spread *
          depth;

      }


      // ======================================
      // DESNO
      // ======================================

     


      // ======================================
      // NORMALIZE
      // ======================================

      const length =
        Math.sqrt(
          x * x +
          y * y +
          z * z
        );


      if (
        length === 0
      ) {

        return {
          x: 0,
          y: 1,
          z: 0,
        };

      }


      return {

        x:
          x / length,

        y:
          y / length,

        z:
          z / length,

      };

    }, [
      spread,
      width,
      height,
      depth,
    ]);

   
      // ==========================================
  // KEYBOARD
  // ==========================================

  const explode =
    useCallback(() => {

      const points =
        pointsRef.current;

      if (!points)
        return;


      const positionAttribute =
        points
          .geometry
          .attributes
          .position;


      const positions =
        positionAttribute
          .array as Float32Array;


      const velocities =
        particles.velocities
        
        
        
        
        
        ;


      // ========================================
      // RESET PARTICLES
      // ========================================

      for (
        let i = 0;
        i < count;
        i++
      ) {

        const i3 =
          i * 3;


        positions[i3] =
          0;

        positions[i3 + 1] =
          0;

        positions[i3 + 2] =
          0;

          particles.colors[i3] =
  Math.random();

particles.colors[i3 + 1] =
  Math.random();

particles.colors[i3 + 2] =
  Math.random();

            

        // ======================================
        // DIRECTION
        // ======================================

        const direction =
          getDirection();


        // ======================================
        // SPEED
        // ======================================

        const speed =
          Math.random() *
          (max - min) +
          min;


        // ======================================
        // VELOCITY
        // ======================================

        velocities[i3] =
          direction.x * speed;

        velocities[i3 + 1] =
          direction.y * speed;

        velocities[i3 + 2] =
          direction.z * speed;

      }


      positionAttribute.needsUpdate =
        true;


      exploded.current =
        true;

    }, [
      count,
      min,
      max,
      particles,
      getDirection,
    ]);


     // ==========================================
  // KEYBOARD LISTENER
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


        // samo prvi keydown
        if (
          keyDown.current
        ) {
          return;
        }


        keyDown.current =
          true;

        explode();

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
    type,
    explode,
    sound,
    audio,
  ]);


 

  // ==========================================
  // ANIMATION
  // ==========================================

  useFrame((_, delta) => {

    const points =
      pointsRef.current;


    if (!points)
      return;


    // ========================================
    // SHADER
    // ========================================

    if (
      materialRef.current
    ) {

      materialRef.current.uTime +=
        delta;

      
      materialRef.current.uType = type;

      materialRef.current.uColor = color;

materialRef.current.uIntensity = intensity;

    }


    // ========================================
    // NEMA EKSPLOZIJE
    // ========================================

    if (
      !exploded.current
    ) {
      return;
    }


    // ========================================
    // PARTICLE DATA
    // ========================================

    const positionAttribute =
      points
        .geometry
        .attributes
        .position;


    const positions =
      positionAttribute
        .array as Float32Array;


    const velocities =
      particles.velocities;


    const maxRadiusSquared =
      maxRadius *
      maxRadius;


    let particlesMoving =
      false;


    // ========================================
    // MOVE
    // ========================================

    for (
      let i = 0;
      i < count;
      i++
    ) {

      const i3 =
        i * 3;


      const vx =
        velocities[i3];

      const vy =
        velocities[i3 + 1];

      const vz =
        velocities[i3 + 2];


      // mrtav particle
      if (
        vx === 0 &&
        vy === 0 &&
        vz === 0
      ) {

        continue;

      }


      particlesMoving =
        true;


      // ======================================
      // POSITION
      // ======================================

      const x =
        positions[i3] +=
          vx * delta;

      const y =
        positions[i3 + 1] +=
          vy * delta;

      const z =
        positions[i3 + 2] +=
          vz * delta;


      // ======================================
      // DISTANCE
      // ======================================

      const distanceSquared =
        x * x +
        y * y +
        z * z;


      // ======================================
      // STOP
      // ======================================

      if (
        distanceSquared >
        maxRadiusSquared
      ) {

        velocities[i3] =
          0;

        velocities[i3 + 1] =
          0;

        velocities[i3 + 2] =
          0;

      }

    }


    positionAttribute.needsUpdate =
      true;


    // ========================================
    // FINISHED
    // ========================================

    if (
      !particlesMoving
    ) {

      exploded.current =
        false;

    }

  });



// use m
     
useM(

  pointsRef, 
  exploded,
  particles.velocities
 
);




  return (
    <>
   
     <points
      ref={pointsRef}
      position={position}
    >

      <bufferGeometry>

        <bufferAttribute
          attach="attributes-position"
          args={[
            particles.positions,
            3,
          ]}
        />

      </bufferGeometry>

      <twistMaterial11
        ref={materialRef}
      />



    </points>      
    </>
  );
}