import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { BackGround1 } from "../shaders/pozadija";

import Explosion1 from "./Particles4a";
import Explosion11 from "./Particles4b";

export default function Scena4()
{

 return (
  <>
   <Explosion11
           count={11111}
           maxRadius={115.35}
           minSpeed={12.4}
           maxSpeed={21.5}
           spread={35}
           width={8}
           height={4}
           depth={111}
           position={[-12, 0, 0]}
           triggerKey1="k"
           type={2}
           sound="dobra1.wav"
           color={[0.08, 2.25, 0.42]}
           intensity={13.5}
         />

            <Explosion1
           count={11111}
           maxRadius={115.35}
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
           intensity={33.5}
         />
  </>

 ) 
}