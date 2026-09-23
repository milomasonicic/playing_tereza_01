
import Sound from "./Sound1";
import PanoNoise from "./pano_02";
import Expl_nova_funkc from "./expl_nova1001"
import Sound22 from "./Sound2";
import Sound33 from "./Sound3";
import { getDirectionNova } from "../function/getdirection"
import { getDirectionNova1 } from "../function/getdirection";
import { explode4, explode3, explode6 } from "../function/explode"

export default function St11(){

    return(
        <>

        
        <PanoNoise width={35}
                        height={35} 
                        triggerKey="h"
                        videoName="ilikeit.webm"
                        shape="plane"
                        position1={[-12, 0, 0]}
                        pitch={40}
                        ></PanoNoise>
                            

        <PanoNoise width={35}
                        height={35} 
                        triggerKey="a"
                        videoName="jek.mp4"
                        shape="plane"
                        position1={[-27, 0, 0]}
                        pitch={56}
                        ></PanoNoise>

         <PanoNoise width={35}
                        height={35} 
                        triggerKey="g"
                        videoName="niz.webm"
                        shape="circle"
                        position1={[0, 0, 0]}
                        pitch={36}
                        ></PanoNoise>

       <Sound22 triggerKey="s"
        position1={[-15, 0, 0]}
        sound = "wav (3).wav"
        color1={[0, 0, 1]}
        color2={[0, 0.2, 0.9]}>
        </Sound22>   

       
        <Sound33  
        triggerKey="j"  
        position1={[20, 0, 0]}  
        sound="wav (3).wav"  
        color1={[0, 0, 1]}  
        color2={[0, 0.2, 0.9]}  
        sirenje={3.9}  
        rotation1={[0.0, 0.1, 0]} 
        >
        </Sound33>

        <Sound33  
        triggerKey="j"  
        position1={[20, 0, 1]}  
        sound="wav (3).wav"  
        color1={[0, 0, 1]}  
        color2={[0, 0.2, 0.9]}  
        sirenje={3.9}  
        rotation1={[0.0, 0.1, 0]} 
        >
        </Sound33>


        
        <PanoNoise width={35}
                        height={35} 
                        triggerKey="k"
                        videoName="jek.mp4"
                        shape="plane"
                        position1={[20, 0, 0]}
                        pitch={30}
                        ></PanoNoise>

        

        </>
    )
}


