import { createContext, useContext, useRef } from "react";
import * as Tone from "tone";

type AudioContextType = {
  playSound: (sound: string) => Promise<void>;
  startNoise: () => Promise<void>;
  stopNoise: () => void;
};

const AudioContext = createContext<AudioContextType | null>(null);

export function AudioProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const players = useRef<Record<string, Tone.Player>>({});

  // OVO TI JE FALILO
  const noiseRef = useRef<Tone.Noise | null>(null);

  const playSound = async (sound: string) => {
    await Tone.start();

    // Ako je zvuk već učitan, koristi postojeći Player
    if (players.current[sound]) {
      players.current[sound].start();
      return;
    }

    // Napravi novog Player-a za taj zvuk
    const player = new Tone.Player(`/sounds/${sound}`).toDestination();

    players.current[sound] = player;

    // Sačekaj da se učita pa ga pusti
    await Tone.loaded();

    player.start();
  };

  const startNoise = async () => {
    await Tone.start();

    // Ako noise već postoji, nemoj praviti novi
    if (noiseRef.current) {
      return;
    }

    const noise = new Tone.Noise("white").toDestination();

    noiseRef.current = noise;

    noise.start();
  };

  const stopNoise = () => {
    const noise = noiseRef.current;

    if (!noise) return;

    noise.stop();
    noise.dispose();

    noiseRef.current = null;
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