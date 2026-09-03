import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { BackGround1 } from "../shaders/pozadija";
import Explosion from "./Particles2";


export default function Scena2()
{

 return (
  <>
    <group position={[7.5, 0, 0]}>

      <Explosion 
        count={4} 
        maxRadius={25.35} 
        minSpeed={12.4} 
        maxSpeed={11.5} 
        spread={35} 
        width={18} 
        height={14} 
        depth={1133} 
        position={[-24, 0, 0]} 
        triggerKey1="g" 
        type={4} 
        sound="imate1.wav" 
        color={[1.00, 0.30, 0.05]} 
        intensity={15.5} 
      />

      <Explosion 
        count={1111} 
        maxRadius={23.45} 
        minSpeed={12.4} 
        maxSpeed={1.5} 
        spread={335} 
        width={2} 
        height={4} 
        depth={1133} 
        position={[-20, 0, 0]} 
        triggerKey1="h" 
        type={1} 
        sound="volime1.wav" 
        color={[1.00, 0.20, 0.05]} 
        intensity={5.5} 
      />

      <Explosion 
        count={11111} 
        maxRadius={11.35} 
        minSpeed={22.4} 
        maxSpeed={11.5} 
        spread={35} 
        width={8} 
        height={14} 
        depth={1433} 
        position={[-32, 0, 0]} 
        triggerKey1="f" 
        type={2} 
        sound="volime1.wav" 
        color={[0.08, 0.25, 0.42]} 
        intensity={5.5} 
      />

      <Explosion 
        count={11111} 
        maxRadius={5.35} 
        minSpeed={12.4} 
        maxSpeed={11.5} 
        spread={35} 
        width={18} 
        height={14} 
        depth={1} 
        position={[-12, 0, 0]} 
        triggerKey1="f" 
        type={2} 
        sound="volime1.wav" 
        color={[0.08, 2.25, 0.42]} 
        intensity={3.5} 
      />

      <Explosion 
        count={11121} 
        maxRadius={11.35} 
        minSpeed={12.4} 
        maxSpeed={11.5} 
        spread={35} 
        width={8} 
        height={14} 
        depth={1433} 
        position={[-3, 0, 0]} 
        triggerKey1="f" 
        type={2} 
        sound="volime1.wav" 
        color={[0.8, 3.25, 0.42]} 
        intensity={1.5} 
      />


      
      <Explosion 
        count={11} 
        maxRadius={13.45} 
        minSpeed={2.4} 
        maxSpeed={0.5} 
        spread={335} 
        width={2} 
        height={4} 
        depth={1133}  
        position={[11, 0, 0]} 
        triggerKey1="j" 
        type={4} 
        sound="imate2.wav" 
        color={[0.98, 0.75, 0.42]} 
        intensity={3.5} 
      />



      <Explosion 
        count={1111} 
        maxRadius={11.35} 
        minSpeed={12.4} 
        maxSpeed={11.5} 
        spread={35} 
        width={8} 
        height={14} 
        depth={1433} 
        position={[4, 0, 0]} 
        triggerKey1="j" 
        type={2} 
        sound="imate2.wav" 
        color={[0.98, 0.75, 0.42]} 
        intensity={5.5} 
      />



      <Explosion 
        count={1111} 
        maxRadius={31.35} 
        minSpeed={12.4} 
        maxSpeed={11.5} 
        spread={35} 
        width={8} 
        height={14} 
        depth={1433} 
        position={[21, 0, 0]} 
        triggerKey1="j" 
        type={3} 
        sound="imate2.wav" 
        color={[0.08, 0.25, 0.42]} 
        intensity={5.5} 
      />

    </group>
  </>
)

}

/*


<Explosion
  count={1111}
  maxRadius={11.35}
  minSpeed={12.4}
  maxSpeed={1.5}
  spread={335}
  width={8}
  height={4}
  depth={1133}
  position={[-10, 0, 0]}
  triggerKey1="f"
  type={1}
  sound="volime1.wav"
  color={[1.0, 0.72, 0.32]}
  intensity={5.5}
/>

<Explosion
  count={1111}
  maxRadius={11.35}
  minSpeed={12.4}
  maxSpeed={1.5}
  spread={335}
  width={8}
  height={4}
  depth={1133}
  position={[0, 0, 0]}
  triggerKey1="f"
  type={1}
  sound="volime1.wav"
  color={[1.0, 0.72, 0.32]}
  intensity={5.5}
/>

<Explosion
  count={1111}
  maxRadius={11.35}
  minSpeed={12.4}
  maxSpeed={1.5}
  spread={335}
  width={8}
  height={4}
  depth={1133}
  position={[10, 0, 0]}
  triggerKey1="f"
  type={1}
  sound="volime1.wav"
  color={[1.0, 0.72, 0.32]}
  intensity={5.5}
/>

<Explosion
  count={1111}
  maxRadius={11.35}
  minSpeed={12.4}
  maxSpeed={1.5}
  spread={335}
  width={8}
  height={4}
  depth={1133}
  position={[20, 0, 0]}
  triggerKey1="f"
  type={1}
  sound="volime1.wav"
  color={[1.0, 0.72, 0.32]}
  intensity={5.5}
/>

       <Explosion
               count={22111}
               maxRadius={11.35}
               minSpeed={12.4}
               maxSpeed={11.5}
               spread={35}
               width={8}
               height={14}
               depth={433}
               position={[-28, 0, 0]}
               triggerKey1="h"
               type={3}
               sound="volime1.wav"
               color={[0.05, 0.42, 0.32]}
               intensity={22.5}
             
             />



   <Explosion
               count={1111}
               maxRadius={411.35}
               minSpeed={12.4}
               maxSpeed={1.5}
               spread={335}
               width={8}
               height={4}
               depth={33}
               position={[20, 0, 0]}
               triggerKey1="f"
               type={1}
               sound="volime1.wav"
               color={[1.0, 0.72, 0.32]}
               intensity={5.5}
             />

              <Explosion
               count={1111}
               maxRadius={211.35}
               minSpeed={12.4}
               maxSpeed={1.5}
               spread={35}
               width={8}
               height={4}
               depth={133}
               position={[8, 0, 0]}
               triggerKey1="g"
               type={2}
               sound="volime1.wav"
               color={[0.08, 0.25, 0.42]}
               intensity={5.5}

             />*/