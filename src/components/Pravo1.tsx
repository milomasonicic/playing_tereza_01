import Pano from "./expl_01";
import Expl from "./expl"
import { getDirectionNova } from "../function/getdirection"
import { explode4 } from "../function/explode"
import { explode2 } from "../function/explode"
import Expl_nova_funkc from "./expl_nova1001"
import Explosion66 from "./Particles6b";

export default function Prvo()
{

  return(
    <>
               <Expl
                      count={110}
                      maxRadius={10.35}
                      minSpeed={12.4}
                      maxSpeed={31.5}
                      spread={0.25}
                      width={2}
                      height={0.51}
                      depth={111}
                       position={[1, 2.2, 10]}
                      triggerKey1="a"
                      type={5}
                      sound="dobra1.wav"
                       color={[1.0, 1.02, 0.8]}
                      intensity={6.5}
                    />

                      <Expl
                        count={11111}
                        maxRadius={11.35}
                        minSpeed={12.4}
                        maxSpeed={31.5}
                        spread={0.25}
                        width={112}
                        height={0.51}
                        depth={111}
                        position={[1, 2.2, 10]}
                        triggerKey1="a"
                        type={2}
                        sound="dobra1.wav"
                        color={[1.2, 1.5, 2.5]}
                        intensity={7.5}
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
                                      triggerKey1="s"
                                      type={2}
                                      sound="dobra1.wav"
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
                                      sound="dobra1.wav"
                                      color={[1.0, 1.02, 1.8]}
                                      intensity={12.5}
                                      getDirection={getDirectionNova}
                                      explode={explode4}
                    />

                      <Expl_nova_funkc
                                    count={3000}
                                      maxRadius={92.35}
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
                                      color={[1.20, 1.92, 1.8]}
                                      intensity={13.5}
                                      getDirection={getDirectionNova}
                                      explode={explode2}
                                    /> 
                        <Expl_nova_funkc
                                    count={2000}
                                      maxRadius={72.35}
                                      minSpeed={12.4}
                                      maxSpeed={31.5}
                                      spread={0.25}
                                      width={12}
                                      height={22.51}
                                      depth={111}
                                      position={[-0.2, 5, 15]}
                                      triggerKey1="d"
                                      type={1}
                                      sound="dobra1.wav"
                                      color={[0.20, 1.92, 1.8]}
                                      intensity={4.5}
                                      getDirection={getDirectionNova}
                                      explode={explode2}
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
    
      
            <Pano 
             width={40}
             height={40} 
             triggerKey="l"
             videoName="stena2.mp4"
             shape="circle"
             position1={[0, 0, 0]}
             sound="dobra1.wav"></Pano>
          

    </>
  )

}