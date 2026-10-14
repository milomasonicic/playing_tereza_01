
import PanoBuild from "./build_pano"


export default function Build()
{
 
    return(
        <>
             <PanoBuild width={35}
                                height={35} 
                                triggerKey="l"
                                videoName="build11.webm"
                                shape="circle"
                                position1={[0, 0, 0]}
                                pitch={35} 
                                frequency1={5}
                                rythm="1n"
                                osc="triangle"
                                ></PanoBuild>  
            <PanoBuild width={35}
                                height={35} 
                                triggerKey="k"
                                videoName="build13a.webm"
                                shape="circle"
                                position1={[0, 0, 0]}
                                pitch={15} 
                                frequency1={11}
                                rythm="16n"
                                osc= "square"
                                ></PanoBuild>  

            <PanoBuild width={35}
                                height={35} 
                                triggerKey="j"
                                videoName="build03.webm"
                                shape="circle"
                                position1={[0, 0, 0]}
                                pitch={3} 
                                  frequency1={11}
                                rythm="2n"
                                osc="sawtooth"
                                ></PanoBuild>                                           
          
        </>

    )

}