import { useEffect } from "react";
import PanoNoise from "./pano_02";
import PanoNoiseRotate from "./pano_02_rotate";

export default function StContent1() {
    return (
  <PanoNoiseRotate width={45}
                          height={45} 
                          triggerKey="k"
                          videoName="p114.webm"
                          shape="plane"
                          position1={[0, 0, 0]}
                          pitch={30}
                          ></PanoNoiseRotate>
                          )

}