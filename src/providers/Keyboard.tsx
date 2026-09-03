import { createContext, useContext, useEffect, useState } from "react";

type Keys = {
  f: boolean;
  g: boolean;
  h: boolean;
  j: boolean;
  k: boolean;
  l: boolean;
  a: boolean;
};

const KeyboardContext = createContext<Keys>({
  f: false,
  g: false,
  h: false,
  j: false,
  k: false,
  l: false,
  a: false
});

export function KeyboardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [keys, setKeys] = useState<Keys>({
    f: false,
    g: false,
    h: false,
    j: false,
    k: false,
    l: false,
    a: false
  });

  const allowedKeys: (keyof Keys)[] = ["a","f", "g", "h", "j", "k","l" ];

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase() as keyof Keys;

      if (!allowedKeys.includes(key)) return;

      setKeys((prev) => ({
        ...prev,
        [key]: true,
      }));
    };

    const up = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase() as keyof Keys;

      if (!allowedKeys.includes(key)) return;

      setKeys((prev) => ({
        ...prev,
        [key]: false,
      }));
    };

    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);

    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  return (
    <KeyboardContext.Provider value={keys}>
      {children}
    </KeyboardContext.Provider>
  );
}

export function useKeyboard() {
  return useContext(KeyboardContext);
}