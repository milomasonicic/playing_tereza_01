import * as THREE from "three";
import { useEffect, useState } from "react";

interface ImageContainerProps {
  videoName: string;
  width?: number;
  height?: number;
}

export default function ImageContainer({
  videoName,
  width = 5.3,
  height = 3.3,
}: ImageContainerProps) {
  const [texture, setTexture] =
    useState<THREE.VideoTexture | null>(null);

  useEffect(() => {

     console.log("VIDEO NAME:", videoName);

    const video = document.createElement("video");

    video.src = `/${videoName}`;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.autoplay = true;
    video.preload = "auto";

    const videoTexture = new THREE.VideoTexture(video);

    videoTexture.colorSpace = THREE.SRGBColorSpace;
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.generateMipmaps = false;

    const handleCanPlay = async () => {
      try {
        await video.play();
        setTexture(videoTexture);
        console.log("Video svira:", video.currentSrc);
      } catch (error) {
        console.error("Ne mogu pokrenuti video:", error);
      }
    };

    const handleError = () => {
      console.error("Greška videa:", video.error, video.currentSrc);
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);

    video.load();

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);

      video.pause();
      video.removeAttribute("src");
      video.load();
      videoTexture.dispose();
    };
  }, [videoName]);

  return (
    <mesh>
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial
        map={texture ?? undefined}
        color={0xffffff}
        side={THREE.DoubleSide}
        toneMapped={false}
      />
    </mesh>
  );
}
