import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { KeyboardProvider } from "./providers/Keyboard";
import { AudioProvider } from "./audio/AudioProvider";
import Scena1 from "./components/Scena1";
import Scena2 from "./components/Scena2";
import Scena3 from "./components/Scena3";
import Scena4 from "./components/Scena4";
import Scena5 from "./components/Scena5";
/*import Scena2 from "./components/Scena2";
import Scena3 from "./components/Scena3";

<Route path="/scena2" element={<Scena2 />} />
<Route path="/scena3" element={<Scena3 />} />

*/

import {
  EffectComposer,
  Bloom,
} from "@react-three/postprocessing";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function SceneCanvas() {
  return (
    <Canvas
      camera={{
        position: [0, 20, 50],
        fov: 50,
      }}
      onCreated={({ scene }) => {
        scene.background = new THREE.Color("#012566");
      }}
    >
      <AudioProvider>
      <KeyboardProvider>

        <Routes>
          <Route path="/" element={<Scena1 />} />
          
          <Route path="/scena2" element={<Scena2 />} />
          <Route path="/scena3" element={<Scena3 />} />
          <Route path="/scena4" element={<Scena4 />} />
          <Route path="/scena5" element={<Scena5 />} />
          
        </Routes>

      </KeyboardProvider>
      </AudioProvider>

      <EffectComposer>
        <Bloom
          intensity={0.835}
          luminanceThreshold={0.5}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>
    </Canvas>
  );
}


export default function App() {
  return (
    <BrowserRouter>
      <SceneCanvas />
    </BrowserRouter>
  );
}