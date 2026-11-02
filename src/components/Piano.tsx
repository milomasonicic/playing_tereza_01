import PanoNoiseSample from "./pano_02_sample";


export default function Piano()
{

    return(
        <>

           <PanoNoiseSample width={45}
                                   height={45} 
                                   triggerKey="l"
                                   videoName="stol1.webm"
                                   shape="plane"
                                   position1={[0, 0, 0]}
                                   sound="strang1.wav"
                                   ></PanoNoiseSample>

              <PanoNoiseSample width={45}
                                   height={45} 
                                   triggerKey="k"
                                   videoName="stol2.webm"
                                   shape="plane"
                                   position1={[0, 0, 0]}
                                   sound="mey1.wav"
                                   ></PanoNoiseSample>   
                  <PanoNoiseSample width={45}
                                   height={45} 
                                   triggerKey="j"
                                   videoName="stol4.webm"
                                   shape="plane"
                                   position1={[0, 0, 0]}
                                   sound="hurt.wav"
                                   ></PanoNoiseSample>    

                                   <PanoNoiseSample width={45}
                                   height={45} 
                                   triggerKey="h"
                                   videoName="stol6.webm"
                                   shape="plane"
                                   position1={[0, 0, 0]}
                                   sound="klk.wav"
                                   ></PanoNoiseSample>  


                                      <PanoNoiseSample width={45}
                                   height={45} 
                                   triggerKey="g"
                                   videoName="stol5.webm"
                                   shape="plane"
                                   position1={[0, 0, 0]}
                                   sound="piano1.wav"
                                   ></PanoNoiseSample>                                           
        
        </>
    )
}