
import Sound from "./Sound1";
import PanoNoise from "./pano_02";
import Expl_nova_funkc from "./expl_nova1001"

import { getDirectionNova } from "../function/getdirection"
import { getDirectionNova1 } from "../function/getdirection";
import { explode4, explode3, explode6 } from "../function/explode"

export default function St11(){

    return(
        <>
        <PanoNoise width={35}
                        height={35} 
                        triggerKey="a"
                        videoName="jek.mp4"
                        shape="plane"
                        position1={[-27, 0, 0]}
                        pitch={56}
                        ></PanoNoise>

             <PanoNoise width={45}
                        height={45} 
                        triggerKey="l"
                        videoName="jek.mp4"
                        shape="plane"
                        position1={[20, 0, 0]}
                        pitch={56}
                        ></PanoNoise>
       
       <Expl_nova_funkc
                                            count={11100}
                                                              maxRadius={122.35}
                                                              minSpeed={12.4}
                                                              maxSpeed={31.5}
                                                              spread={0.25}
                                                              width={12}
                                                              height={22.51}
                                                              depth={111}
                                                              position={[20, 0, 0]}
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
                                                            position={[20, 0, 0]}
                                                            triggerKey1="s"
                                                            type={5}
                                                            sound="ppp.wav"
                                                            color={[1.0, 1.02, 1.8]}
                                                            intensity={12.5}
                                                            getDirection={getDirectionNova}
                                                            explode={explode4}
                                          />
        
        </>
    )
}