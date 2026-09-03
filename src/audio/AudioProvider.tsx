import { createContext, useContext, useRef } from "react";
import * as Tone from "tone";

type AudioContextType = {
  playSound: (sound: string) => void;
};

const AudioContext = createContext<AudioContextType | null>(null);

export function AudioProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const players = useRef<Record<string, Tone.Player>>({});

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

  return (
    <AudioContext.Provider value={{ playSound }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}