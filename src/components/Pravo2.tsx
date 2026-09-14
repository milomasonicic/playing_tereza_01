import Pano from "./expl_01";
import Expl from "./expl"
import { getDirectionNova } from "../function/getdirection"
import { getDirectionNova1 } from "../function/getdirection";
import { explode4, explode3, explode6 } from "../function/explode"
import { explode2 } from "../function/explode"
import Expl_nova_funkc1 from "./expl_prvo3";
import Expl_nova_funkc from "./expl_nova1001";
import Expl_nova0222 from "./expl_nova11";
import Explosion66 from "./Particles6b";
import Explosion999 from "./Particles7a";
import Explosion from "./Particles3";
import { splash } from "../function/explode";
import { getDirectionSplash } from "../function/getdirection";
import Explosion1 from "./Particles4a";

export default function Prvo_nastavak()
{

  return(
    <>

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
                                                       triggerKey1="s"
                                                       type={2}
                                                       sound="ppp.wav"
                                                       color={[1.0, 1.02, 1.8]}
                                                       intensity={2.5}
                                                       getDirection={getDirectionNova}
                                                       explode={explode4}
                                                     />  
                 
                                       <Expl_nova_funkc
                                     count={100}
                                                       maxRadius={130.35}
                                                       minSpeed={12.4}
                                                       maxSpeed={31.5}
                                                       spread={0.25}
                                                       width={12}
                                                       height={22.51}
                                                       depth={111}
                                                       position={[-0.2, 5, 15]}
                                                       triggerKey1="s"
                                                       type={5}
                                                       sound="ppp.wav"
                                                       color={[1.0, 1.02, 1.8]}
                                                       intensity={12.5}
                                                       getDirection={getDirectionNova}
                                                       explode={explode4}
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
                                                sound="okej.wav"
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
                                                sound="okej.wav"
                                                color={[2.5, 0.05, 0.08]}
                                                intensity={23.5}
                                              /> 
                            
                                            <Expl_nova0222 count={7000}
                                              maxRadius={22.35}
                                              minSpeed={12.4}
                                              maxSpeed={31.5}
                                              spread={0.25}
                                              width={12}
                                              height={22.51}
                                              depth={111}
                                             position={[-3, 0, 0]}
                                              triggerKey1="j"
                                              type={2}
                                              sound="kat2.wav"
                                              color={[2.5, 0.35, 0.02]}
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
                                              position={[3, 0, 0]}
                                              triggerKey1="j"
                                              type={2}
                                              sound="kat2.wav"
                                              color={[2.5, 0.35, 0.02]}
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
                                              position={[0, 0, 0]}
                                              triggerKey1="j"
                                              type={2}
                                              sound="kat2.wav"
                                              color={[2.5, 0.35, 0.02]}
                                              intensity={23.5}
                                               getDirection={getDirectionNova1}
                                            /> 
                                                        
                           

                             
                                
                
    </>
  )

}