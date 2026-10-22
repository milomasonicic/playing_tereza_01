
import Sound from "./Sound1";
import PanoNoise from "./pano_02";
import PanoPhoto1 from "./pano_03";



export default function Prvo11(){

    return(
        <>
        <PanoNoise width={35}
                        height={35} 
                        triggerKey="h"
                        videoName="ooo117axx.webm"
                        shape="plane"
                        position1={[0, 0, 0]}
                        pitch={46}
                        ></PanoNoise>
       
                                                                                   
        <Sound triggerKey="f"
        position1={[0, 0, 0]}
        sound = "wav (3).wav"
        ></Sound>

        
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