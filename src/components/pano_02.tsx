import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useAudio } from "../audio/AudioProvider";

type PanoProps = {
  width?: number;
  height?: number;
  triggerKey: string;
  videoName: string;
  shape?: "plane" | "circle";
  position1?: [number, number, number];
};

export default function PanoNoise({
  width = 50,
  height = 28.125,
  triggerKey,
  videoName,
  shape = "plane",
  position1 = [0, 0, 0],
}: PanoProps) {
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);

  // Čuvamo video element da možemo da ga play/pause-ujemo
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const textureRef = useRef<THREE.VideoTexture | null>(null);

  const [texture, setTexture] =
    useState<THREE.VideoTexture | null>(null);

  const isPressed = useRef(false);

  const audio = useAudio();

  // ==============================
  // VIDEO
  // ==============================

  useEffect(() => {
    const video = document.createElement("video");

    video.src = `/${videoName}`;

    // Bitno za browser / Three.js
    video.loop = true;
    video.muted = true;
    video.playsInline = true;

    // Nemoj odmah učitavati ceo video
    video.preload = "metadata";

    // Čuvamo referencu
    videoRef.current = video;

    // ==============================
    // VIDEO TEXTURE
    // ==============================

    const videoTexture = new THREE.VideoTexture(video);

    videoTexture.colorSpace = THREE.SRGBColorSpace;

    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;

    videoTexture.generateMipmaps = false;

    textureRef.current = videoTexture;

    setTexture(videoTexture);

    // NE radimo video.play() ovde!
    // Video će krenuti tek kada pritisneš dugme.

    return () => {
      // Pauziraj video
      video.pause();

      // Oslobodi video source
      video.removeAttribute("src");
      video.load();

      // Oslobodi texture
      videoTexture.dispose();

      // Očisti reference
      videoRef.current = null;
      textureRef.current = null;
    };
  }, [videoName]);

  // ==============================
  // KEYBOARD
  // ==============================

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      if (key !== triggerKey.toLowerCase()) {
        return;
      }

      // Sprečava ponovno okidanje dok držiš dugme
      if (isPressed.current) {
        return;
      }

      isPressed.current = true;

      // ==============================
      // VIDEO START
      // ==============================

      if (videoRef.current) {
        const video = videoRef.current;

        // Pokreni video OD POČETKA
        video.currentTime = 0;

        video.play().catch((error) => {
          console.error(
            `Video "${videoName}" nije mogao da se pokrene:`,
            error
          );
        });
      }

      // ==============================
      // NOISE START
      // ==============================

      audio?.startNoise();
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      if (key !== triggerKey.toLowerCase()) {
        return;
      }

      isPressed.current = false;

      // ==============================
      // VIDEO STOP
      // ==============================

      if (videoRef.current) {
        videoRef.current.pause();
      }

      // ==============================
      // NOISE STOP
      // ==============================

      audio?.stopNoise();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [triggerKey, videoName, audio]);

  // ==============================
  // FADE
  // ==============================

  useFrame((_, delta) => {
    if (!materialRef.current) return;

    const targetOpacity = isPressed.current ? 1 : 0;

    materialRef.current.opacity = THREE.MathUtils.damp(
      materialRef.current.opacity,
      targetOpacity,
      5,
      delta
    );
  });

  // ==============================
  // RENDER
  // ==============================

  if (!texture) {
    return null;
  }

  return (
    <mesh
      position={position1}
      rotation={[
        THREE.MathUtils.degToRad(-21.8),
        0,
        0,
      ]}
    >
      {shape === "circle" ? (
        <circleGeometry args={[width / 2, 64]} />
      ) : (
        <planeGeometry args={[width, height]} />
      )}

      <meshBasicMaterial
        ref={materialRef}
        map={texture}
        toneMapped={false}
        side={THREE.DoubleSide}
        transparent
        opacity={0}
      />
    </mesh>
  );
}