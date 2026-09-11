
import Expl from "./expl"
import Expl_nova from "./expl_nova"
import Expl_nova02 from "./expl_nova11"
import { getDirectionNova } from "../function/getdirection"
import { getDirectionNova1 } from "../function/getdirection"
import { getDirectionNova11 } from "../function/getdirection"
import Expl_nova0222 from "./expl_nova11"
import Expl_nova_funkc from "./expl_nova1001"
import { explode } from "../function/explode"
import { explode1 } from "../function/explode"
import { explode2 } from "../function/explode"
import { explode4 } from "../function/explode"
import { explode6 } from "../function/explode"
import { explode7 } from "../function/explode"


export default function Test1()
{

 return (
 <>
     <Expl
                  count={11111}
                  maxRadius={16.35}
                  minSpeed={12.4}
                  maxSpeed={31.5}
                  spread={0.25}
                  width={2}
                  height={0.51}
                  depth={111}
                   position={[1, 2.2, 10]}
                  triggerKey1="g"
                  type={2}
                  sound="dobra1.wav"
                  color={[2.5, 0.05, 0.08]}
                  intensity={13.5}
                />

           <Expl
                  count={11111}
                  maxRadius={16.35}
                  minSpeed={12.4}
                  maxSpeed={31.5}
                  spread={0.25}
                  width={2}
                  height={0.51}
                  depth={111}
                   position={[1, 2.2, 10]}
                  triggerKey1="g"
                  type={2}
                  sound="dobra1.wav"
                  color={[0.5, 1.05, 1.001]}
                  intensity={13.5}
                />   

                <Expl_nova   count={11111}
                  maxRadius={16.35}
                  minSpeed={12.4}
                  maxSpeed={31.5}
                  spread={0.25}
                  width={2}
                  height={0.51}
                  depth={111}
                   position={[0.2, 5, 10]}
                  triggerKey1="a"
                  type={2}
                  sound="dobra1.wav"
                  color={[0.5, 1.05, 1.001]}
                  intensity={13.5}
                   getDirection={getDirectionNova}
                />     

                
                <Expl_nova   count={11111}
                  maxRadius={22.35}
                  minSpeed={12.4}
                  maxSpeed={31.5}
                  spread={0.25}
                  width={2}
                  height={0.51}
                  depth={111}
                  position={[-0.2, 5, 15]}
                  triggerKey1="s"
                  type={2}
                  sound="dobra1.wav"
                  color={[2.5, 0.02, 0.01]}
                  intensity={13.5}
                   getDirection={getDirectionNova1}
                /> 

                
                <Expl_nova0222 count={7000}
                  maxRadius={22.35}
                  minSpeed={12.4}
                  maxSpeed={31.5}
                  spread={0.25}
                  width={12}
                  height={22.51}
                  depth={111}
                  position={[2, 5, 15]}
                  triggerKey1="j"
                  type={2}
                  sound="dobra1.wav"
                  color={[2.5, 0.35, 0.02]}
                  intensity={13.5}
                   getDirection={getDirectionNova}
                /> 

                     
                <Expl_nova0222 count={11000}
                  maxRadius={22.35}
                  minSpeed={12.4}
                  maxSpeed={31.5}
                  spread={0.25}
                  width={12}
                  height={22.51}
                  depth={111}
                  position={[-0.2, 5, 15]}
                  triggerKey1="j"
                  type={1}
                  sound="dobra1.wav"
                  color={[0.5, 1.35, 2.02]}
                  intensity={10.5}
                   getDirection={getDirectionNova}
                /> 


                <Expl_nova_funkc
                count={11000}
                  maxRadius={22.35}
                  minSpeed={12.4}
                  maxSpeed={31.5}
                  spread={0.25}
                  width={12}
                  height={22.51}
                  depth={111}
                  position={[-0.2, 5, 15]}
                  triggerKey1="k"
                  type={1}
                  sound="dobra1.wav"
                  color={[0.5, 1.35, 2.02]}
                  intensity={2.5}
                  getDirection={getDirectionNova}
                  explode={explode}
                /> 

                <Expl_nova_funkc
                count={5100}
                  maxRadius={22.35}
                  minSpeed={12.4}
                  maxSpeed={31.5}
                  spread={0.25}
                  width={12}
                  height={22.51}
                  depth={111}
                  position={[-0.2, 5, 15]}
                  triggerKey1="f"
                  type={1}
                  sound="dobra1.wav"
                  color={[0.5, 1.35, 2.02]}
                  intensity={1.5}
                  getDirection={getDirectionNova}
                  explode={explode1}
                /> 

                  <Expl_nova_funkc
                count={100}
                  maxRadius={22.35}
                  minSpeed={12.4}
                  maxSpeed={31.5}
                  spread={0.25}
                  width={12}
                  height={22.51}
                  depth={111}
                  position={[-0.2, 5, 15]}
                  triggerKey1="f"
                  type={4}
                  sound="dobra1.wav"
                  color={[1.5, 2.35, 0.02]}
                  intensity={1.5}
                  getDirection={getDirectionNova}
                  explode={explode1}
                /> 


                <Expl_nova_funkc
                count={11100}
                  maxRadius={122.35}
                  minSpeed={12.4}
                  maxSpeed={31.5}
                  spread={0.25}
                  width={12}
                  height={22.51}
                  depth={111}
                  position={[-0.2, 5, 15]}
                  triggerKey1="h"
                  type={2}
                  sound="dobra1.wav"
                  color={[1.5, 2.35, 0.02]}
                  intensity={1.5}
                  getDirection={getDirectionNova}
                  explode={explode2}
                /> 

          
         <Expl_nova_funkc
                count={11100}
                  maxRadius={122.35}
                  minSpeed={12.4}
                  maxSpeed={31.5}
                  spread={0.25}
                  width={12}
                  height={22.51}
                  depth={111}
                  position={[-0.2, 5, 15]}
                  triggerKey1="d"
                  type={2}
                  sound="dobra1.wav"
                  color={[1.5, 2.35, 0.02]}
                  intensity={1.5}
                  getDirection={getDirectionNova}
                  explode={explode4}
                /> 

                
         <Expl_nova_funkc
                count={11100}
                  maxRadius={122.35}
                  minSpeed={12.4}
                  maxSpeed={31.5}
                  spread={0.25}
                  width={12}
                  height={22.51}
                  depth={111}
                  position={[-0.2, 5, 15]}
                  triggerKey1="l"
                  type={2}
                  sound="dobra1.wav"
                  color={[1.5, 2.35, 0.02]}
                  intensity={1.5}
                  getDirection={getDirectionNova}
                  explode={explode7}
                /> 

                
              
                

 </>
)
}