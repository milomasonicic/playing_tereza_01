import { createContext, useContext, useEffect, useRef } from "react";
import * as Tone from "tone";

type AudioContextType = {
  playSound: (sound: string) => Promise<void>;
  startNoise: (pitch: number) => Promise<void>;
  stopNoise: () => void;
};

const AudioContext = createContext<AudioContextType | null>(null);

export function AudioProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const players = useRef<Record<string, Tone.Player>>({});

  const noiseRef = useRef<Tone.Noise | null>(null);
  const pitchShiftRef = useRef<Tone.PitchShift | null>(null);

  // Kreiramo samo jednom
  useEffect(() => {
    const pitchShift = new Tone.PitchShift({
      pitch: 11,
      wet: 1,
    }).toDestination();

    const noise = new Tone.Noise({
      type: "brown",
      volume: -8,
    });

    noise.connect(pitchShift);

    noiseRef.current = noise;
    pitchShiftRef.current = pitchShift;

    return () => {
      noise.stop();
      noise.dispose();
      pitchShift.dispose();

      noiseRef.current = null;
      pitchShiftRef.current = null;
    };
  }, []);

  const playSound = async (sound: string) => {
    await Tone.start();

    if (players.current[sound]) {
      players.current[sound].start();
      return;
    }

    const player = new Tone.Player(`/sounds/${sound}`).toDestination();

    players.current[sound] = player;

    await Tone.loaded();

    player.start();
  };

  const startNoise = async (pitch: number) => {
    await Tone.start();

    const noise = noiseRef.current;
    const pitchShift = pitchShiftRef.current;

    if (!noise || !pitchShift) return;

    pitchShift.pitch = pitch;

    if (noise.state !== "started") {
      noise.start();
    }
  };

  const stopNoise = () => {
    const noise = noiseRef.current;

    if (!noise) return;

    if (noise.state === "started") {
      noise.stop();
    }
  };

  return (
    <AudioContext.Provider
      value={{
        playSound,
        startNoise,
        stopNoise,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}