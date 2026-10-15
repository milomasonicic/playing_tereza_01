
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
                                videoName="build14a.webm"
                                shape="circle"
                                position1={[0, 0, 0]}
                                pitch={21} 
                                frequency1={21}
                                rythm="1n"
                                osc="triangle"
                                ></PanoBuild>  

            <PanoBuild width={35}
                                height={35} 
                                triggerKey="j"
                                videoName="build03.webm"
                                shape="circle"
                                position1={[0, 0, 0]}
                                pitch={3} 
                                  frequency1={55}
                                rythm="2n"
                                osc="triangle"
                                ></PanoBuild>   

            <PanoBuild width={35}
                                height={35} 
                                triggerKey="h"
                                videoName="build15a.webm"
                                shape="circle"
                                position1={[0, 0, 0]}
                                pitch={8} 
                                frequency1={41}
                                rythm="1n"
                                osc= "triangle"
                                ></PanoBuild>  

                                
               <PanoBuild width={35}
                                height={35} 
                                triggerKey="g"
                                videoName="build20aaa.webm"
                                shape="circle"
                                position1={[0, 0, 0]}
                                pitch={14} 
                                frequency1={21}
                                rythm="2n"
                                osc= "triangle"
                                ></PanoBuild>  


                 <PanoBuild width={35}
                                height={35} 
                                triggerKey="d"
                                videoName="build21aaa.webm"
                                shape="circle"
                                position1={[0, 0, 0]}
                                pitch={14} 
                                frequency1={21}
                                rythm="2n"
                                osc= "triangle"
                                ></PanoBuild>    

                  <PanoBuild width={35}
                                height={35} 
                                triggerKey="f"
                                videoName="build19a.webm"
                                shape="circle"
                                position1={[0, 0, 0]}
                                pitch={24} 
                                frequency1={21}
                                rythm="2n"
                                osc= "triangle"
                                ></PanoBuild>                                
                                                                               
          
        </>

    )

}