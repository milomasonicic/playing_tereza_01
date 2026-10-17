import { useEffect } from "react";

import {
  BeatProvider,
  useBeat,
} from "../providers/BeatProvider";

import PanoBuildBeat1 from "./beat_pano1";

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
    <PanoBuildBeat1
      width={35}
      height={35}
      triggerKey="l"
      videoName="build11.webm"
      shape="circle"
      position1={[0, 0, 0]}
      pitch={35}
      frequency1={5}
      rythm="1n"
      osc="triangle"
    />
  );
}

export default function Build2() {
  return (
    <BeatProvider
      bpm={338}
      pattern={[
        {
          key: "l",
          videoName: "a.webm",
          pitch: 35,
        },
        {
          key: "l",
          videoName: "m103aa.webm",
          pitch: 20,
        },
        {
          key: "l",
          videoName: "004.webm",
          pitch: 5,
        },
        {
          key: "l",
          videoName: "a.webm",
          pitch: 35,
        },
        {
          key: "l",
          videoName: "m103aa.webm",
          pitch: 20,
        },
        {
          key: "l",
          videoName: "004.webm",
          pitch: 5,
        },
      ]}
    >
      <St2 />
    </BeatProvider>
  );
}