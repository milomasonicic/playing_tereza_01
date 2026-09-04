import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { BackGround1 } from "../shaders/pozadija";
import Explosion from "./Particles3";


export default function Scena3()
{

 return (
  <>
   <group position={[7.5, 0, 0]}>
   <>
      {/* 1 — plava */}
      <Explosion
        count={11111}
        maxRadius={155.35}
        minSpeed={12.4}
        maxSpeed={21.5}
        spread={5}
        width={8}
        height={4}
        depth={1}
        position={[-12, 0, 0]}
        triggerKey1="k"
        type={2}
        sound="dobra1.wav"
        color={[0.08, 2.25, 0.42]}
        intensity={3.5}
      />

      {/* 2 — ljubičasta */}
      <Explosion
        count={9000}
        maxRadius={130}
        minSpeed={10}
        maxSpeed={19}
        spread={5}
        width={7}
        height={5}
        depth={1}
        position={[-8, 2, 0]}
        triggerKey1="a"
        type={2}
        sound="dobra1.wav"
        color={[1.5, 0.1, 2.5]}
        intensity={4}
      />

      {/* 3 — narandžasta */}
      <Explosion
        count={10000}
        maxRadius={145}
        minSpeed={11}
        maxSpeed={20}
        spread={5}
        width={9}
        height={4}
        depth={1}
        position={[-4, -2, 0]}
        triggerKey1="f"
        type={2}
        sound="dobra1.wav"
        color={[2.5, 0.5, 0.05]}
        intensity={4}
      />

      {/* 4 — crvena */}
      <Explosion
        count={10000}
        maxRadius={150}
        minSpeed={12}
        maxSpeed={22}
        spread={5}
        width={8}
        height={5}
        depth={1}
        position={[0, 1, 0]}
        triggerKey1="g"
        type={2}
        sound="dobra1.wav"
        color={[2.5, 0.05, 0.08]}
        intensity={4}
      />

      {/* 5 — zelena */}
      <Explosion
        count={10000}
        maxRadius={155}
        minSpeed={12}
        maxSpeed={22}
        spread={5}
        width={8}
        height={4}
        depth={1}
        position={[5, -1, 0]}
        triggerKey1="k"
        type={2}
        sound="dobra1.wav"
        color={[0.05, 2.5, 0.2]}
        intensity={4}
      />
    </>
  

   </group> 
    

  </>

 ) 
}