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
    
    <Explosion 
            count={1111} 
            maxRadius={55.35} 
            minSpeed={12.4} 
            maxSpeed={11.5} 
            spread={35} 
            width={18} 
            height={14} 
            depth={1} 
            position={[-12, 0, 0]} 
            triggerKey1="k" 
            type={2} 
            sound="dobra1.wav" 
            color={[0.08, 2.25, 0.42]} 
            intensity={3.5} 
          />   

   </group> 
    

  </>

 ) 
}