import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { BackGround1 } from "../shaders/pozadija";

import Explosion505 from "./Particles5a";
import Explosion66 from "./Particles6b";

export default function Scena5()
{

 return (
  <>


    <Explosion66
               count={11111}
               maxRadius={16.35}
               minSpeed={12.4}
               maxSpeed={121.5}
               spread={225}
               width={8}
               height={4}
               depth={211}
                position={[-12, 0, 0]}
               triggerKey1="k"
               type={2}
               sound="dobra1.wav"
               color={[2.5, 0.05, 0.08]}
               intensity={13.5}
             />

      <Explosion66
               count={11111}
               maxRadius={16.35}
               minSpeed={12.4}
               maxSpeed={121.5}
               spread={225}
               width={8}
               height={4}
               depth={21}
                position={[-12, 0, 0]}
               triggerKey1="k"
               type={2}
               sound="dobra1.wav"
               color={[2.5, 0.5, 0.05]}
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