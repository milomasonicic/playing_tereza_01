import { useEffect } from "react";
import PanoPhoto1 from "./pano_03";


import PanoBeat from "./beat";
import {
  BeatProvider,
  useBeat,
} from "../providers/BeatProvider";


function St11011Content() {
   const { start, stop } = useBeat();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "KeyQ") {
        start();
      }

      if (event.code === "KeyW") {
        stop();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      stop();
    };
  }, [start, stop]);

  return (
    <PanoBeat
      triggerKey="a"
      videoName="m1.mp4"
      pitch={11}
      width={40}
      height={40}
      shape="plane"
      position1={[0, 0, 0]}
    />
  );
}

export default function St11011() {
  return (

   

    <BeatProvider
      bpm={58}
      pattern={[
        {
          key: "a",
          videoName: "m5.mp4",
          pitch: 1,
        },
        {
          key: "a",
          videoName: "m3.mp4",
          pitch: 21,
        },
        {
          key: "a",
          videoName: "m7a.webm",
          pitch: 11,
        },
        {
          key: "a",
          videoName: "m77a.webm",
          pitch: 31,
        },
        {
          key: "a",
          videoName: "m89a.webm",
          pitch: 38,
        },
        {
          key: "a",
          videoName: "m93aa.webm",
          pitch: 8,
        },
        {
          key: "a",
          videoName: "m94aa.webm",
          pitch: 12,
        },
        {
          key: "a",
          videoName: "m97aa.webm",
          pitch: 25,
        }
      /*  
      m89a
      {
          key: "a",
          videoName: "",
          pitch: 11,
        },

        {
          key: "a",
          videoName: "o1.webm",
          pitch: 15,
        },*/
      ]}

    >
      <St11011Content />
      
        <PanoPhoto1 width={35}
                        height={35} 
                        triggerKey="w"
                        imageName="dark.png"
                        shape="plane"
                        position1={[0, 0, 0]}
                        pitch={16}></PanoPhoto1>  
    </BeatProvider>
  );
}