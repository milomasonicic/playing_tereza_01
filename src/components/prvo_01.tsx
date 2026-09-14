
import Pano from "./expl_01"
import Sound from "./Sound1";
import Explosion from "./Particles2";
import Expl_nova_funkc from "./expl_nova1001";
import Expl_nova0222 from "./expl_nova11";
import { getDirectionNova } from "../function/getdirection";
import { getDirectionNova1 } from "../function/getdirection";
import { explode4 } from "../function/explode";



export default function  Prvo1()
{

    return(
        <>
           
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
                                     
                                    <Sound></Sound>
                                                                                  
        
        </>
    )
}

/*
00.20.05

deca24.0.mov

*/
