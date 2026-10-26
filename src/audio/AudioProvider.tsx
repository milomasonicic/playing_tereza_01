import { createContext, useContext, useEffect, useRef } from "react";
import * as Tone from "tone";

type SynthOscillatorType =
  | "sine"
  | "triangle"
  | "square"
  | "sawtooth";


type AudioContextType = {
  playSound: (sound: string) => Promise<void>;
  startSound: (sound: string) => Promise<void>;
  stopSound: (sound: string) => void;

  startNoise: (pitch: number) => Promise<void>;
  startNoise1: (
    pitch: number,
    osc: SynthOscillatorType,
    frequency1: number,
    rythm: string
  ) => Promise<void>; 
  stopNoise: () => void;

  startSynth: (pitch: number) => Promise<void>;
  stopSynth: () => void;
  
  // NOVO
  startRotationSound: (speed: number) => Promise<void>;
  setRotationSound: (speed: number) => void;
  stopRotationSound: () => void;
};

const AudioContext = createContext<AudioContextType | null>(null);

export function AudioProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const players = useRef<Record<string, Tone.Player>>({});

  // ==============================
  // NOISE
  // ==============================

  const noiseRef = useRef<Tone.Noise | null>(null);
  const pitchShiftRef = useRef<Tone.PitchShift | null>(null);

  // ==============================
  // SYNTH
  // ==============================

  const synthRef = useRef<Tone.Synth | null>(null);
  const reverbRef = useRef<Tone.Reverb | null>(null);

  // ==============================
  // CREATE AUDIO
  // ==============================

  useEffect(() => {
    // ------------------------------
    // NOISE
    // ------------------------------

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

    // ------------------------------
    // SYNTH
    // ------------------------------

const reverb = new Tone.Reverb({
  decay: 10,
  wet: 0.7,
}).toDestination();

const chorus = new Tone.Chorus({
  frequency: 2.15,
  delayTime: 3.5,
  depth: 0.7,
  wet: 0.45,
}).start();

const filter = new Tone.Filter({
  type: "lowpass",
  frequency: 4500,
  rolloff: -12,
});

const synth = new Tone.Synth({
  oscillator: {
    type: "triangle",
  },

  envelope: {
    attack: 0.4,
    decay: 0.2,
    sustain: 0.7,
    release: 1,
  },

  volume: -16,
});

synth.connect(filter);
filter.connect(chorus);
chorus.connect(reverb);

synthRef.current = synth;
    // ==============================
    // CLEANUP
    // ==============================

    return () => {
      // Noise
      noise.stop();
      noise.dispose();
      pitchShift.dispose();

      // Synth
      synth.dispose();
      reverb.dispose();
      filter.dispose();
      chorus.dispose();

      noiseRef.current = null;
      pitchShiftRef.current = null;

      synthRef.current = null;
      reverbRef.current = null;
    };
  }, []);

  // ==============================
  // PLAY SOUND
  // ==============================

  const playSound = async (sound: string) => {
    await Tone.start();

    if (players.current[sound]) {
      players.current[sound].start();
      return;
    }

    const player = new Tone.Player(
      `/sounds/${sound}`
    ).toDestination();

    players.current[sound] = player;

    await Tone.loaded();

    player.start();
  };

 
  // ==============================
  // START NOISE
  // ==============================

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

  // ==============================
  // STOP NOISE
  // ==============================

  const stopNoise = () => {
    const noise = noiseRef.current;

    if (!noise) return;

    if (noise.state === "started") {
      noise.stop();
    }
  };

  // ==============================
  // START SYNTH
  // ==============================

  const startSynth = async (pitch: number) => {
    await Tone.start();

    const synth = synthRef.current;

    if (!synth) return;

    // pitch = semitoni
    synth.detune.value = pitch;

    synth.triggerAttack("A3");
   
  };


  const stopSynth = () => {
    const synth = synthRef.current;

    if (!synth) return;

    synth.triggerRelease();
  };


  // ==============================
// ROTATION SOUND
// ==============================

const startRotationSound = async (speed: number) => {
  await Tone.start();

  const synth = synthRef.current;

  if (!synth) return;

  // Brzinu pretvaramo u pitch
  // 0 -> -12 semitona
  // 200 -> +12 semitona
  const pitch = (speed / 200) * 48 - 12;

  synth.detune.value = pitch;

  // Pokreni zvuk
  synth.triggerAttack("A3");
};

const setRotationSound = (speed: number) => {
  const synth = synthRef.current;

  if (!synth) return;

  const pitch = (speed / 200) * 48 - 12;

  // glatka promjena pitcha
  synth.detune.rampTo(pitch, 0.15);
};

const stopRotationSound = () => {
  const synth = synthRef.current;

  if (!synth) return;

  synth.triggerRelease();
};


  // ==============================
  // STAR + STOP SOUND
  // ==============================

const startSound = async (sound: string) => {
  await Tone.start();

  let player = players.current[sound];

  if (!player) {
    player = new Tone.Player(
      `/sounds/${sound}`
    ).toDestination();

    players.current[sound] = player;

    await Tone.loaded();
  }

  // Ako je već aktivan, nemoj ga ponovo pokretati
  if (player.state === "started") return;

  player.start();
};

const stopSound = (sound: string) => {
  const player = players.current[sound];

  if (!player) return;

  if (player.state === "started") {
    player.stop();
  }
};


  // ==============================
  // StopNoise1 + StartNoise1
  // ==============================


const startNoise1 = async (pitch: number,
  osc: SynthOscillatorType,
 frequency1: number, rythm: string
) => {
  await Tone.start();

  const synth = new Tone.Synth({
    oscillator: {
      type: osc,
    },
    envelope: {
      attack: 0.5,
      decay: 0.0035,
      sustain: 0.15,
      release: 1.2,
    },
  }).toDestination();

  synth.triggerAttackRelease(
    Tone.Frequency(frequency1).transpose(pitch).toFrequency(),
    rythm
  );
};

  // ==============================
  // PROVIDER
  // ==============================

  return (
    <AudioContext.Provider
      value={{
        playSound,
        startSound,
        stopSound,
        startNoise,
        stopNoise,
        startNoise1,
        startSynth,
        stopSynth,
        startRotationSound,
        setRotationSound,
        stopRotationSound
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}