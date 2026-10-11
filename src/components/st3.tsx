import { useEffect, useState } from "react";
import HorizontallScroll from "./HorizontalScroll";

export default function St3() {
  const [rotationSpeed, setRotationSpeed] = useState(111.825);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // DESNA STRELICA = ubrzaj
      if (event.code === "ArrowRight") {
        setRotationSpeed((prev) => prev + 10);
      }

      // LIJEVA STRELICA = uspori
      if (event.code === "ArrowLeft") {
        setRotationSpeed((prev) => Math.max(0, prev - 10));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <HorizontallScroll
        rotationSpeed={rotationSpeed}
        radius={220}
        panoWidth={95}
        panoHeight={95}
        position1={[0, -50, 0]}
      />
    </>
  );
}
