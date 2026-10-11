import { useEffect, useState } from "react";
import HorizontallScroll from "./HorizontalScroll";
import { useAudio } from "../audio/AudioProvider";

export default function St3() {
  const [rotationSpeed, setRotationSpeed] = useState(111.825);

  const audio = useAudio();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // ==============================
      // Q = POKRENI ZVUK
      // ==============================
      if (event.code === "KeyQ") {
        audio?.startRotationSound(rotationSpeed);
      }

      // ==============================
      // W = ZAUSTAVI ZVUK
      // ==============================
      if (event.code === "KeyW") {
        audio?.stopRotationSound();
      }

      // ==============================
      // DESNA STRELICA = UBRZAJ
      // ==============================
      if (event.code === "ArrowRight") {
        setRotationSpeed((prev) => {
          const newSpeed = prev + 10;

          audio?.setRotationSound(newSpeed);

          return newSpeed;
        });
      }

      // ==============================
      // LIJEVA STRELICA = USPORI
      // ==============================
      if (event.code === "ArrowLeft") {
        setRotationSpeed((prev) => {
          const newSpeed = Math.max(0, prev - 10);

          audio?.setRotationSound(newSpeed);

          return newSpeed;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [audio, rotationSpeed]);

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