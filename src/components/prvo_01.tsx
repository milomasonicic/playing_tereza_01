
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
import Sound22 from "./Sound2";
import Sound44 from "./sound_33";

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
                        videoName="ooo117axx.webm"
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


        
                      
                        <Sound44
                        triggerKey="w"
                        position1={[-10, 0, 0]}
                        sound="wav (3).wav"
                        color1={[0.0, 0.02, 0.15]}
                        color2={[0.0, 0.02, 0.15]}

                        width={9}
                        height={11}

                        horizontalCount={3}
                        verticalCount={1}

                        horizontalOffset={0}
                        verticalOffset={0}

                        lineZ={10}

                        horizontalEnabled={true}
                        verticalEnabled={true}

                        sirenje={3}
                        />

                         <Sound44
                        triggerKey="q"
                        position1={[0, 0, 0]}
                        sound="wav (3).wav"
                        color1={[0.075, 0.055, 0.12]}

                            color2={[0.48, 0.38, 0.65]}

                        width={19}
                        height={21}

                        horizontalCount={4}
                        verticalCount={1}

                        horizontalOffset={1}
                        verticalOffset={3}

                        lineZ={12}

                        horizontalEnabled={true}
                        verticalEnabled={true}

                        sirenje={3}
                        />

                        
                         <Sound44
                        triggerKey="e"
                        position1={[10, 10, 0]}
                        sound="wav (3).wav"
                       color1={[0.055, 0.065, 0.06]}
                        color2={[0.62, 0.39, 0.19]}

                        width={7}
                        height={6}

                        horizontalCount={3}
                        verticalCount={1}

                        horizontalOffset={2}
                        verticalOffset={0}

                        lineZ={12}

                        horizontalEnabled={true}
                        verticalEnabled={true}

                        sirenje={3}
                        />


                       
               

          
        </>
    )
}

/*

  <Sound44
                        triggerKey="q"
                        position1={[-15, 5, 0]}
                        sound="wav (3).wav"
                        color1={[0, 0, 1]}
                        color2={[0, 0.2, 0.9]}

                        width={8}
                        height={14}

                        horizontalCount={2}
                        verticalCount={2}

                        horizontalOffset={11}
                        verticalOffset={12}

                        lineZ={22}

                        horizontalEnabled={true}
                        verticalEnabled={true}

                        sirenje={2}
                        />


 <Sound44
                        triggerKey="e"
                        position1={[15, 5, 0]}
                        sound="wav (3).wav"
                        color1={[0, 0, 1]}
                        color2={[0, 0.2, 0.9]}

                        width={8}
                        height={14}

                        horizontalCount={2}
                        verticalCount={2}

                        horizontalOffset={11}
                        verticalOffset={12}

                        lineZ={22}

                        horizontalEnabled={true}
                        verticalEnabled={true}

                        sirenje={2}
                        />


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
