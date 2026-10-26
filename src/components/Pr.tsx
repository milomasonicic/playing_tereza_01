
import Sound from "./Sound1";
import PanoNoise from "./pano_02";
import PanoPhoto1 from "./pano_03";
import PanoBuild from "./build_pano"



export default function Prvo11(){

    return(
        <>
        <PanoNoise width={35}
                        height={35} 
                        triggerKey="h"
                        videoName=""
                        shape="plane"
                        position1={[0, 0, 0]}
                        pitch={11}
                        ></PanoNoise>

       
        <PanoBuild width={35}
                        height={35} 
                        triggerKey="h"
                     videoName="tic7a.webm"
                        shape="plane"
                     position1={[0, 0, 0]}
                        pitch={21} 
                        frequency1={85}
                        rythm="8n"
                        osc="sawtooth"
                        ></PanoBuild> 

        
        <PanoNoise width={35}
                        height={35} 
                        triggerKey="j"
                        videoName=""
                        shape="plane"
                        position1={[0, 0, 0]}
                        pitch={6}
                        ></PanoNoise>

       
        <PanoBuild width={35}
                        height={35} 
                        triggerKey="j"
                     videoName="tic17aa.webm"
                        shape="plane"
                     position1={[0, 0, 0]}
                        pitch={11} 
                        frequency1={65}
                        rythm="8n"
                        osc="sawtooth"
                        ></PanoBuild>  

                   
        <PanoNoise width={35}
                        height={35} 
                        triggerKey="k"
                        videoName=""
                        shape="plane"
                        position1={[0, 0, 0]}
                        pitch={6}
                        ></PanoNoise> 

           <PanoBuild width={35}
                        height={35} 
                        triggerKey="k"
                     videoName="tic5a.webm"
                        shape="plane"
                     position1={[0, 0, 0]}
                        pitch={6} 
                        frequency1={95}
                        rythm="16n"
                        osc="sawtooth"
                        ></PanoBuild> 

<PanoNoise width={35}
                        height={35} 
                        triggerKey="g"
                        videoName=""
                        shape="plane"
                        position1={[0, 0, 0]}
                        pitch={3}
                        ></PanoNoise> 

             <PanoBuild width={35}
                        height={35} 
                        triggerKey="g"
                     videoName="tic6a.webm"
                        shape="plane"
                     position1={[0, 0, 0]}
                        pitch={11} 
                        frequency1={115}
                        rythm="16n"
                        osc="sawtooth"
                        ></PanoBuild>     

<PanoNoise width={35}
                        height={35} 
                        triggerKey="l"
                        videoName=""
                        shape="plane"
                        position1={[0, 0, 0]}
                        pitch={8}
                        ></PanoNoise> 

                        
             <PanoBuild width={35}
                        height={35} 
                        triggerKey="l"
                     videoName="tic14aaa.webm"
                        shape="plane"
                     position1={[0, 0, 0]}
                        pitch={21} 
                        frequency1={40}
                        rythm="16n"
                        osc="sawtooth"
                        ></PanoBuild>                                                               



               

        <Sound triggerKey="f"
        position1={[0, 0, 0]}
        sound = "wav (3).wav"
        ></Sound>

        
                <PanoPhoto1 width={35}
                                height={35} 
                                triggerKey="a"
                                imageName="dark.png"
                                shape="plane"
                                position1={[0, 0, 0]}
                                pitch={26}></PanoPhoto1>                  
        
                  
                
        
        </>
    )
}