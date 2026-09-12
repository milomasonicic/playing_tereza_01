import Pano from "./expl_01";
import Expl from "./expl"
import { getDirectionNova } from "../function/getdirection"
import { explode4 } from "../function/explode"
import Expl_nova_funkc from "./expl_nova1001"

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
    
      
            <Pano 
             width={30}
             height={60} 
             triggerKey="l"
             videoName="stena2.mp4"
             shape="circle"
             position1={[-12, 0, 0]}
             sound="dobra1.wav"></Pano>
          

    </>
  )

}