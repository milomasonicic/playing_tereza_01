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
      bpm={238}
      pattern={[
        {
          key: "a",
          videoName: "m106aa.webm",
          pitch: 15,
        },
        {
          key: "a",
          videoName: "m121aa.webm",
          pitch: 7,
        },
        {
          key: "a",
          videoName: "m120aa.webm",
          pitch: 11,
        },
        {
          key: "a",
          videoName: "m110aa.webm",
          pitch: 25,
        },
        {
          key: "a",
          videoName: "m128aa.webm",
          pitch: 35,
        },
        {
          key: "a",
          videoName: "m132aa.webm",
          pitch: 45,
        },
        {
          key: "a",
          videoName: "m114aa.webm",
          pitch: 55,
        },
        {
          key: "a",
          videoName: "m131aa.webm",
          pitch: 65,
        },
        {
          key: "a",
          videoName: "m118aa.webm",
          pitch: 20,
        },
        {
          key: "a",
          videoName: "m126aa.webm",
          pitch: 31,
        },
        
      /* 
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