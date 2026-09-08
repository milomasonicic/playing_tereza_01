
import { useMemo } from "react";
import LatteGeo from "./02latte";

interface LatteFieldProps {
  count?: number;
}

export default function LatteField({
  count = 30,
}: LatteFieldProps) {
  const lattes = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,

      position: [
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      ] as [number, number, number],

      scale: 0.03 + Math.random() * 0.07,
    }));
  }, [count]);

  return (
    <group>
      {lattes.map((latte) => (
        <LatteGeo
          key={latte.id}
          triggerKey="a"
          position={latte.position}
        />
      ))}
    </group>
  );
}
