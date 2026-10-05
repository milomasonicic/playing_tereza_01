import { useEffect } from "react";

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
      videoName="output1.webm"
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
      bpm={128}
      pattern={[
        {
          key: "a",
          videoName: "output1.webm",
          pitch: 1,
        },
        {
          key: "a",
          videoName: "output111.webm",
          pitch: 21,
        },
      ]}
    >
      <St11011Content />
    </BeatProvider>
  );
}