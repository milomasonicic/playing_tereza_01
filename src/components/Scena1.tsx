import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { BackGround1 } from "../shaders/pozadija";
import Explosion from "./Particles";

export default function Scena()
{

  return(
   
    <>

  

      <Explosion
        count={4111}
        maxRadius={11.35}
        minSpeed={22.4}
        maxSpeed={3.5}
        spread={335}
        width={118}
        height={114}
        depth={433}
        position={[0, 0, 0]}
        triggerKey1="g"
        type={1}
        sound="volime1.wav"
      
      />

      <Explosion
        count={4800}
        maxRadius={11.35}
        minSpeed={0.4}
        maxSpeed={2.5}
        spread={5}
        width={18}
        height={14}
        depth={22}
        position={[0, 0, 0]}
        triggerKey1="f"
        type={2}
        sound="crveno.mp3"
      />

      <Explosion
        count={10800}
        maxRadius={32.35}
        minSpeed={0.4}
        maxSpeed={33.5}
        spread={21}
        width={112}
        height={114}
        depth={1948}
        position={[0, 5, 0]}
        triggerKey1="h"
        type={3}
        sound="kondek.mp3"
      />

          
    <Explosion
      count={3000}
      maxRadius={24.35}
      minSpeed={0.4}
      maxSpeed={22.5}
      spread={15}
      width={18}
      height={14}
      depth={1}
      position={[0, 0, 0]}
      triggerKey1="j"
      type={4}
      sound="lek.mp3"
    />

    </>
     
  )

}

/*
  <mesh position={[0, 0, -0.071]}>
  <planeGeometry args={[120, 80]} />
  <backGround1 />
</mesh>
*/