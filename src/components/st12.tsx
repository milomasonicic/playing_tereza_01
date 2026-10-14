import PanoNoiseRotate from "./pano_02_rotate";

export default function StContent1() {
  return (
    <>
     

      

          <PanoNoiseRotate
        width={45}
        height={45}
        triggerKey="k"
        videoName="o101.webm"
        shape="plane"
        position1={[0, 0, 0]}
        pitch={30}
        speed={21}
      />

         <PanoNoiseRotate
        width={45}
        height={45}
        triggerKey="k"
        videoName="p117cc.webm"
        shape="plane"
        position1={[0, 0, 0]}
        pitch={30}
        speed={221}
      />


    

    
    </>
  );
}