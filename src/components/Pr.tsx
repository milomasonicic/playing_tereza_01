
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
                        videoName="ooo117axx.webm"
                        shape="plane"
                        position1={[0, 0, 0]}
                        pitch={11}
                        ></PanoNoise>

        
                     <PanoBuild width={35}
                                        height={35} 
                                        triggerKey="l"
                                        videoName="ubrzano.mp4"
                                        shape="plane"
                                        position1={[0, 0, 0]}
                                        pitch={1} 
                                        frequency1={25}
                                        rythm="16n"
                                        osc="square"
                                        ></PanoBuild>  

                  <PanoBuild width={35}
                                        height={35} 
                                        triggerKey="k"
                                        videoName="ubrzano.mp4"
                                        shape="plane"
                                        position1={[0, 0, 0]}
                                        pitch={11} 
                                        frequency1={25}
                                        rythm="1n"
                                        osc="sine"
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