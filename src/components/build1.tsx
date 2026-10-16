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
    <>
      {/* KICK */}
      <PanoBuildBeat1
        width={25}
        height={25}
        triggerKey="kick"
        videoName="004.webm"
        shape="circle"
        position1={[10, 0, 0]}
        pitch={5}
        frequency1={5}
        rythm="8n"
        osc="triangle"
      />

      {/* HI-HAT */}
      <PanoBuildBeat1
        width={25}
        height={25}
        triggerKey="hat"
        videoName="m103aa.webm"
        shape="circle"
        position1={[0, 0, 0]}
        pitch={10}
        frequency1={10}
        rythm="32n"
        osc="triangle"
      />

      {/* SNARE */}
      <PanoBuildBeat1
        width={35}
        height={35}
        triggerKey="snare"
        videoName="a.webm"
        shape="circle"
        position1={[-10, 0, 0]}
        pitch={5}
        frequency1={1}
        rythm="8n"
        osc="triangle"
      />
    </>
  );
}

export default function Build2() {
  return (
    <BeatProvider
      bpm={238}
      pattern={[
        {
          key: "kick",
          videoName: "kick.webm",
          pitch: 35,
          osc: "triangle",
          frequency1: 5,
          rythm: "16n",
          width: 35,
          height: 35,
          shape: "circle",
          position1: [-40, 0, 0],
        },

        {
          key: "hat",
          videoName: "hihat.webm",
          pitch: 60,
          osc: "square",
          frequency1: 10,
          rythm: "16n",
          width: 25,
          height: 25,
          shape: "circle",
          position1: [0, 0, 0],
        },

        {
          key: "snare",
          videoName: "snare.webm",
          pitch: 45,
          osc: "sawtooth",
          frequency1: 8,
          rythm: "16n",
          width: 35,
          height: 35,
          shape: "circle",
          position1: [40, 0, 0],
        },
      ]}
    >
      <St2 />
    </BeatProvider>
  );
}