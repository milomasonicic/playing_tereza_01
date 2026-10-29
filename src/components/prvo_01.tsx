
import Pano from "./expl_01"
import Sound from "./Sound1";
import PanoNoise from "./pano_02";
import Explosion from "./Particles2";
import Expl_nova_funkc from "./expl_nova1001";
import Expl_nova0222 from "./expl_nova11";
import { getDirectionNova } from "../function/getdirection";
import { getDirectionNova1 } from "../function/getdirection";
import { explode4 } from "../function/explode";
import PanoPhoto1 from "./pano_03";

import PanoBuildBeat1 from "./beat_pano1";




export default function  Prvo1()
{

    return(
        <>
             

          <PanoNoise width={35}
                        height={35} 
                        triggerKey="l"
                        videoName="trg02xx.webm"
                        shape="circle"
                        position1={[0, 0, 0]}
                        pitch={38}
                        ></PanoNoise>                                              
        
     

        <PanoNoise width={35}
                        height={35} 
                        triggerKey="k"
                        videoName="trg03xx.webm"
                        shape="circle"
                        position1={[0, 0, 0]}
                        pitch={31}
                        ></PanoNoise> 

          
        <PanoNoise width={35}
                        height={35} 
                        triggerKey="j"
                        videoName="ginis5xx.webm"
                        shape="circle"
                        position1={[0, 0, 0]}
                        pitch={46}
                        ></PanoNoise>

          <PanoNoise width={35}
                        height={35} 
                        triggerKey="h"
                        videoName="odlk.mp4"
                        shape="circle"
                        position1={[0, 0, 0]}
                        pitch={16}
                        ></PanoNoise>   

          <PanoNoise width={35}
                        height={35} 
                        triggerKey="g"
                        videoName="ginis13xxa.webm"
                        shape="circle"
                        position1={[0, 0, 0]}
                        pitch={39}
                        ></PanoNoise> 

           
          <PanoNoise width={35}
                        height={35} 
                        triggerKey="f"
                        videoName="ginis16axx.webm"
                        shape="circle"
                        position1={[0, 0, 0]}
                        pitch={41}
                        ></PanoNoise> 

          

                                     

        <PanoPhoto1 width={35}
                        height={35} 
                        triggerKey="a"
                        imageName="dark.png"
                        shape="circle"
                        position1={[0, 0, 0]}
                        pitch={16}></PanoPhoto1>                  

          
        </>
    )
}

/*


                       <Pano 
                        width={35}
                        height={35} 
                        triggerKey="l"
                        videoName="output111.webm"
                        shape="circle"
                        position1={[0, 0, 0]}
                        sound="raz.wav"></Pano>  

                        
                                    <Pano 
                                     width={35}
                                     height={35} 
                                     triggerKey="k"
                                     videoName="jako.webm"
                                     shape="circle"
                                     position1={[0, 0, 0]}
                                     sound="raz1.wav"></Pano>      
                        
                                    <Pano 
                                     width={35}
                                     height={35} 
                                     triggerKey="j"
                                     videoName="dan.webm"
                                     shape="circle"
                                     position1={[0, 0, 0]}
                                     sound="raz3.wav"></Pano>
                                     
                                    <Sound 
                                    triggerKey="h"
                                    sound="wav (3).wav"></Sound>
                                     



00.20.05

deca24.0.mov

*/
