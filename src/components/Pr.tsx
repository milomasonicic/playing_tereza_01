
import Sound from "./Sound1";
import PanoNoise from "./pano_02";

export default function Prvo11(){

    return(
        <>
        <PanoNoise width={35}
                        height={35} 
                        triggerKey="h"
                        videoName="eee1.webm"
                        shape="plane"
                        position1={[0, 0, 0]}
                        pitch={46}
                        ></PanoNoise>
       
                                                                                   
        <Sound triggerKey="h"
        position1={[0, 0, 0]}
        sound = "wav (3).wav"
        ></Sound>
        
        </>
    )
}