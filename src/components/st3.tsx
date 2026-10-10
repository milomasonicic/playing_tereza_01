import PanoNoise03 from "./pano_05";
import HorizontallScroll from "./HorizontalScroll";


export default function St3() {
   
    return(
        <>
          <HorizontallScroll
            rotationSpeed={111.825}
            radius={220}
            panoWidth={95}
            panoHeight={95}
            position1={[0,-50,0]}
            />
        </>
     );
}

