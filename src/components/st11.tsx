import { useEffect } from "react";

import PanoBeat from "./beat";
import {
  BeatProvider,
  useBeat,
} from "../providers/BeatProvider";


function St2() {
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
      videoName="m100aa.webm"
      pitch={11}
      width={40}
      height={40}
      shape="plane"
      position1={[0, 0, 0]}
    />
  );
}

export default function St222() {
  return (
    <BeatProvider
      bpm={338}
      pattern={[
        {
          key: "a",
          videoName: "p111.webm",
          pitch: 15,
        },
        {
          key: "a",
          videoName: "p112.webm",
          pitch: 7,
        },
        {
          key: "a",
          videoName: "p113.webm",
          pitch: 11,
        },
        {
          key: "a",
          videoName: "p117c.webm",
          pitch: 25,
        },
        {
          key: "a",
          videoName: "p117cc.webm",
          pitch: 35,
        },
         {
          key: "a",
          videoName: "p117cc21.webm",
          pitch: 35,
        },
         
        {
          key: "a",
          videoName: "p117cc3.webm",
          pitch: 35,
        },
       
       
        {
          key: "a",
          videoName: "p117cc2.webm",
          pitch: 35,
        },

       
        
      /* 
p117cc3
      p117cc21 
      p117ccc
      m101aa 
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
      <St2 />
    </BeatProvider>
  );
}