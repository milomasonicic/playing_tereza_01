import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

export type Beat = {
  key: string;
  videoName: string;
  pitch: number;
};

type BeatContextType = {
  running: boolean;
  beatIndex: number;
  currentBeat: Beat | null;
  start: () => void;
  stop: () => void;
};

const BeatContext = createContext<BeatContextType | null>(null);

type BeatProviderProps = {
  children: React.ReactNode;
  bpm?: number;
  pattern: Beat[];
};

export function BeatProvider({
  children,
  bpm = 120,
  pattern,
}: BeatProviderProps) {
  const [running, setRunning] = useState(false);
  const [beatIndex, setBeatIndex] = useState(0);
  const [currentBeat, setCurrentBeat] = useState<Beat | null>(null);

  const intervalRef = useRef<number | null>(null);
  const patternRef = useRef(pattern);
  const bpmRef = useRef(bpm);

  useEffect(() => {
    patternRef.current = pattern;
  }, [pattern]);

  useEffect(() => {
    bpmRef.current = bpm;
  }, [bpm]);

  const stop = useCallback(() => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    setRunning(false);
    setBeatIndex(0);
    setCurrentBeat(null);
  }, []);

  const start = useCallback(() => {
    if (intervalRef.current !== null) return;

    const currentPattern = patternRef.current;

    if (!currentPattern.length) return;

    setRunning(true);
    setBeatIndex(0);
    setCurrentBeat(currentPattern[0]);

    const intervalMs = 60000 / bpmRef.current;

    intervalRef.current = window.setInterval(() => {
      setBeatIndex((prev) => {
        const next = prev + 1;

        const beat =
          patternRef.current[
            next % patternRef.current.length
          ];

        console.log(
          "BEAT:",
          next % patternRef.current.length,
          beat.videoName,
          beat.pitch
        );

        setCurrentBeat(beat);

        return next;
      });
    }, intervalMs);
  }, []);

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <BeatContext.Provider
      value={{
        running,
        beatIndex,
        currentBeat,
        start,
        stop,
      }}
    >
      {children}
    </BeatContext.Provider>
  );
}

export function useBeat() {
  const context = useContext(BeatContext);

  if (!context) {
    throw new Error(
      "useBeat mora biti unutar BeatProvider-a"
    );
  }

  return context;
}