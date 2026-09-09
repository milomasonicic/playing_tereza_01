
import Expl from "./expl"
import Expl_nova from "./expl_nova"
import { getDirectionNova } from "../function/getdirection"



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

 </>
)
}