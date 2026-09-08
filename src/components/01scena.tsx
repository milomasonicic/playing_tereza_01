import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { BackGround1 } from "../shaders/pozadija";
import Krug from "./krug";
import Explosion1610 from "./01late";
import LatteGeo from "./02latte";
import LatteField from "./LatteField";

export default function Druga_sc()
{

 return (
  <>
 
   <LatteField></LatteField>

   <Explosion1610
                count={3000}
      maxRadius={111.35}
      minSpeed={0.4}
      maxSpeed={2.5}
      spread={15}
      width={0.1}
       height={12}
  depth={0.2}
      position={[0, 0, 0]}
      triggerKey1="j"
      type={1}
      sound="oo.wav"
      kickCount ={22}
      kickInterval ={7133}
            />
  

    <Explosion1610
      count={3000}
      maxRadius={111.35}
      minSpeed={0.4}
      maxSpeed={222.5}
      spread={15}
      width={15}
       height={0.12}
  depth={0.2}
      position={[0, 0, 0]}
      triggerKey1="g"
      type={2}
      sound="dio.wav"
      kickCount ={22}
      kickInterval ={2133}
            />

         <Explosion1610
      count={3000}
      maxRadius={111.35}
      minSpeed={0.4}
      maxSpeed={22.5}
      spread={15}
      width={15}
       height={0.12}
  depth={0.2}
      position={[0, 0, 0]}
      triggerKey1="g"
      type={4}
      sound="dio.wav"
      kickCount ={22}
      kickInterval ={2133}
            />       
  </>

 ) 
}


/*   Ovo je dobro
    <Explosion1
               count={11111}
               maxRadius={16.35}
               minSpeed={12.4}
               maxSpeed={121.5}
               spread={0.25}
               width={2}
               height={0.51}
               depth={111}
                position={[-12, 0, 0]}
               triggerKey1="k"
               type={2}
               sound="dobra1.wav"
               color={[2.5, 0.05, 0.08]}
               intensity={13.5}
             />

           <Explosion1
                 count={11111}
               maxRadius={22.35}
               minSpeed={12.4}
               maxSpeed={121.5}
               spread={0.25}
               width={2}
               height={0.51}
               depth={111}
                position={[-12, 0, 0]}
               triggerKey1="k"
               type={2}
               sound="dobra1.wav"
               color={[2.5, 1.5, 0.05]}
               intensity={15.5}
             />
    */














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