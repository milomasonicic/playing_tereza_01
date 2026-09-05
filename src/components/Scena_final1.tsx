import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { BackGround1 } from "../shaders/pozadija";

import Explosion1 from "./Particles4a";
import ExplosionPodvr from "./Particles4a1";
import Explosion from "./Particles3";
import ExplosionG from "./Particles3a";

import Explosion66 from "./Particles6b";
import Explosion6c from "./Particles6c";
import Explosion888 from "./Particle7";
import Explosion999 from "./Particles7a";

import Explosion1111 from "./Particle81";

export default function ScenaFinal()
{

 return (
  <>
   <ExplosionPodvr
               count={11111}
               maxRadius={16.35}
               minSpeed={12.4}
               maxSpeed={31.5}
               spread={0.25}
               width={2}
               height={0.51}
               depth={111}
                position={[17, 10, 10]}
               triggerKey1="g"
               type={2}
               sound="dobra1.wav"
               color={[2.5, 0.05, 0.08]}
               intensity={13.5}
             />

     <ExplosionPodvr
               count={11111}
               maxRadius={16.35}
               minSpeed={12.4}
               maxSpeed={31.5}
               spread={0.25}
               width={2}
               height={0.51}
               depth={111}
               position={[17, 10, 10]}
               triggerKey1="g"
               type={2}
               sound="dobra1.wav"
               color={[1.5, 1.05, 0.08]}
               intensity={13.5}
             />         

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

        <Explosion
               count={11111}
               maxRadius={55.35}
             minSpeed={4.4}
               maxSpeed={12.5}
               spread={5}
               width={8}
               height={4}
               depth={1}
               position={[-12, 0, 0]}
               triggerKey1="h"
               type={2}
               sound="dobra1.wav"
               color={[0.08, 2.25, 0.42]}
               intensity={8.5}
             />

            

           <ExplosionG
               count={11111}
               maxRadius={55.35}
               minSpeed={4.4}
               maxSpeed={12.5}
               spread={5}
               width={8}
               height={4}
               depth={1}
               position={[12, 0, 0]}
               triggerKey1="j"
               type={2}
               sound="dobra1.wav"
               color={[1.5, 0.1, 2.5]}
               intensity={8.5}
             />    


              <Explosion66
                            count={11111}
                            maxRadius={1116.35}
                            minSpeed={12.4}
                            maxSpeed={17.5}
                            spread={1225}
                            width={18}
                            height={4}
                            depth={211}
                             position={[-12, 0, 0]}
                            triggerKey1="f"
                            type={2}
                            sound="dobra1.wav"
                            color={[2.5, 1.5, 1.8]}
                            intensity={23.5}
                          />  
              <Explosion66
                            count={111}
                            maxRadius={1116.35}
                            minSpeed={12.4}
                            maxSpeed={17.5}
                            spread={1225}
                            width={18}
                            height={4}
                            depth={211}
                             position={[-12, 0, 0]}
                            triggerKey1="f"
                            type={4}
                            sound="dobra1.wav"
                            color={[2.5, 0.05, 0.08]}
                            intensity={23.5}
                          />              


               <Explosion6c
                            count={11111}
                            maxRadius={1116.35}
                            minSpeed={12.4}
                            maxSpeed={121.5}
                            spread={1225}
                            width={18}
                            height={4}
                            depth={211}
                             position={[-12, 0, 0]}
                            triggerKey1="a"
                            type={2}
                            sound="dobra1.wav"
                            color={[2.5, 0.05, 0.08]}
                            intensity={23.5}
                          /> 

               <Explosion6c
                            count={11111}
                            maxRadius={1116.35}
                            minSpeed={12.4}
                            maxSpeed={121.5}
                            spread={1225}
                            width={18}
                            height={4}
                            depth={211}
                             position={[-12, 0, 0]}
                            triggerKey1="a"
                            type={2}
                            sound="dobra1.wav"
                            color={[4.5, 0.5, 0.05]}
                            intensity={23.5}
                          />   
                  
           

           
               <Explosion888
                            count={11111}
                            maxRadius={116.35}
                            minSpeed={12.4}
                            maxSpeed={121.5}
                            spread={1225}
                            width={18}
                            height={4}
                            depth={211}
                             position={[-12, 0, 0]}
                            triggerKey1="s"
                            type={2}
                            sound="dobra1.wav"
                            color={[4.5, 0.5, 0.05]}
                            intensity={23.5}
                          />  


                      
               <Explosion999
                            count={111}
                            maxRadius={116.35}
                            minSpeed={12.4}
                            maxSpeed={121.5}
                            spread={1225}
                            width={18}
                            height={4}
                            depth={211}
                             position={[-12, 0, 0]}
                            triggerKey1="d"
                            type={4}
                            sound="dobra1.wav"
                            color={[0.5, 1.5, 1.05]}
                            intensity={13.5}
                          />     
                 <Explosion999
                            count={11111}
                            maxRadius={116.35}
                            minSpeed={12.4}
                            maxSpeed={121.5}
                            spread={1225}
                            width={18}
                            height={4}
                            depth={211}
                             position={[-12, 0, 0]}
                            triggerKey1="d"
                            type={2}
                            sound="dobra1.wav"
                            color={[1.5, 0.5, 0.08]}
                            intensity={23.5}
                          />  


                           <Explosion1111
                            count={11111}
                            maxRadius={116.35}
                            minSpeed={12.4}
                            maxSpeed={121.5}
                            spread={1225}
                            width={18}
                            height={4}
                            depth={211}
                             position={[-12, 0, 0]}
                            triggerKey1="l"
                            type={2}
                            sound="dobra1.wav"
                            color={[1.5, 1.05, 0.08]}
                            intensity={23.5}
                          />      


                            <Explosion1111
                            count={11111}
                            maxRadius={116.35}
                            minSpeed={12.4}
                            maxSpeed={121.5}
                            spread={1225}
                            width={18}
                            height={4}
                            depth={211}
                             position={[-12, -20, 10]}
                            triggerKey1="l"
                            type={2}
                            sound="dobra1.wav"
                             color={[0.05, 2.5, 0.2]}
                            intensity={23.5}
                          />       

                                 <Explosion1111
                            count={111}
                            maxRadius={116.35}
                            minSpeed={12.4}
                            maxSpeed={121.5}
                            spread={1225}
                            width={18}
                            height={4}
                            depth={211}
                             position={[-12, -20, 10]}
                            triggerKey1="l"
                            type={4}
                            sound="dobra1.wav"
                            color={[2.5, 1.5, 1.8]}
                            intensity={13.5}
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