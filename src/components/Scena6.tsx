import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { BackGround1 } from "../shaders/pozadija";

import Explosion6c from "./Particles6c";


export default function Scena6()
{

 return (
  <>


    <Explosion6c
               count={11111}
               maxRadius={11.35}
               minSpeed={12.4}
               maxSpeed={21.5}
               spread={25}
               width={18}
               height={14}
               depth={1}
                position={[-12, 0, 0]}
               triggerKey1="k"
               type={2}
               sound="dobra1.wav"
               color={[1.5, 0.5, 0.08]}
               intensity={13.5}
             />

      <Explosion6c
              count={11111}
               maxRadius={11.35}
               minSpeed={12.4}
               maxSpeed={21.5}
               spread={25}
               width={118}
               height={14}
               depth={11}
                position={[-12, 0, 0]}
               triggerKey1="k"
               type={2}
               sound="dobra1.wav"
               color={[2.5, 0.05, 0.08]}
               intensity={13.5}
             />
      

  </>

 ) 
}


   /*       <Explosion505
               count={11111}
               maxRadius={15.35}
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
               color={[2.5, 0.05, 0.08]}
               intensity={3.5}
             />

             <Explosion505
               count={11111}
               maxRadius={15.35}
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
               color={[0.5, 2.5, 1.9]}
               intensity={3.5}
             />*/