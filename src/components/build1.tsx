import { useEffect } from "react";

import {
  BeatProvider,
  useBeat,
} from "../providers/BeatProvider";

type SynthOscillatorType =
  | "sine"
  | "triangle"
  | "square"
  | "sawtooth";

import PanoBuildBeat1 from "./beat_pano1";

function St22() {
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
      shape="plane"
      position1={[0, 0, 0]}
      pitch={1}
      frequency1={15}
      rythm="1n"
      osc="sine"
    />
  );
}

export default function Build2() {
  return (
    <BeatProvider
      bpm={138}
      pattern={[
        {
          key: "l",
          videoName: "mag110a.webm",
          pitch: 1,
          osc: "sawtooth", 
          frequency1:35,
          rythm:"32n",
          width:40,
          height:40,
          shape:"plane",
          position1:[0, 0, 0] 
        },

        {
          key: "l",
          videoName: "mag6.webm",
          pitch: 11,
          osc: "triangle", 
          frequency1:111,
          rythm:"32n",
          width:40,
          height:40,
          shape:"plane",
          position1:[0, 0, 0] 
        },

        {
          key: "l",
          videoName: "mag7a.webm",
          pitch: 31,
          osc: "sawtooth", 
          frequency1:21,
          rythm:"16n",
          width:40,
          height:40,
          shape:"plane",
          position1:[0, 0, 0] 
        },
        //novo
        {
          key: "l",
          videoName: "mag110a.webm",
          pitch: 1,
          osc: "sawtooth", 
          frequency1:35,
          rythm:"32n",
          width:40,
          height:40,
          shape:"plane",
          position1:[0, 0, 0] 
        },
                {
          key: "l",
          videoName: "mag12a.webm",
          pitch: 11,
          osc: "square", 
          frequency1:35,
          rythm:"32n",
          width:40,
          height:40,
          shape:"plane",
          position1:[0, 0, 0] 
        },
               {
          key: "l",
          videoName: "mag11a.webm",
          pitch: 11,
          osc: "square", 
          frequency1:35,
          rythm:"16n",
          width:40,
          height:40,
          shape:"plane",
          position1:[0, 0, 0] 
        },
      {
          key: "l",
          videoName: "mag111a.webm",
          pitch: 11,
          osc: "square", 
          frequency1:35,
          rythm:"16n",
          width:40,
          height:40,
          shape:"plane",
          position1:[0, 0, 0] 
        },
        {
          key: "l",
          videoName: "mag113a.webm",
          pitch: 11,
          osc: "square", 
          frequency1:35,
          rythm:"8n",
          width:40,
          height:40,
          shape:"plane",
          position1:[0, 0, 0] 
        },
      // novo
      {
          key: "l",
          videoName: "mil31xx.webm",
          pitch: 1,
          osc: "sawtooth", 
          frequency1:35,
          rythm:"32n",
          width:40,
          height:40,
          shape:"plane",
          position1:[0, 0, 0] 
        },
        
        {
          key: "l",
          videoName: "mil33xx.webm",
          pitch: 11,
          osc: "triangle", 
          frequency1:111,
          rythm:"32n",
          width:40,
          height:40,
          shape:"plane",
          position1:[0, 0, 0] 
        },
 
        {
          key: "l",
          videoName: "mil32xx.webm",
          pitch: 31,
          osc: "sawtooth", 
          frequency1:21,
          rythm:"16n",
          width:40,
          height:40,
          shape:"plane",
          position1:[0, 0, 0] 
        },
        {
          key: "l",
          videoName: "mil34xx.webm",
          pitch: 1,
          osc: "sawtooth", 
          frequency1:35,
          rythm:"32n",
          width:40,
          height:40,
          shape:"plane",
          position1:[0, 0, 0] 
        },
              {
          key: "l",
          videoName: "mil35xx.webm",
          pitch: 11,
          osc: "square", 
          frequency1:35,
          rythm:"32n",
          width:40,
          height:40,
          shape:"plane",
          position1:[0, 0, 0] 
        },
             {
          key: "l",
          videoName: "mil39xx.webm",
          pitch: 11,
          osc: "square", 
          frequency1:35,
          rythm:"16n",
          width:40,
          height:40,
          shape:"plane",
          position1:[0, 0, 0] 
        },
           {
          key: "l",
          videoName: "mil39xx.webm",
          pitch: 11,
          osc: "square", 
          frequency1:35,
          rythm:"32n",
          width:40,
          height:40,
          shape:"plane",
          position1:[0, 0, 0] 
        },
      /*



         p100.webm
      {
          key: "l",
          videoName: "mag6.webm",
          pitch: 1,
          osc: "sawtooth", 
          frequency1:35,
          rythm:"32n",
          width:40,
          height:40,
          shape:"plane",
          position1:[0, 0, 0] 
        },*/
      



        
       
      ]}
    >
      <St22 />
    </BeatProvider>
  );
}