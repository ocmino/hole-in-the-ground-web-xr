
import { ZapparCamera } from "@zappar/zappar-react-three-fiber";
import HoleMask from "./HoleMask";
import React from "react";
import { InstantTracker } from "@zappar/zappar-react-three-fiber";
import { ZapparCanvas } from "@zappar/zappar-react-three-fiber";
import "./App.css";

export default function App() {
  return (
    <div className="App">
    <ZapparCanvas>
      <ZapparCamera />
      <InstantTracker
        placementUI="placement-only"
        placementCameraOffset={[0, 0, -10]}
      >
       <HoleMask scale={[1.5, 1.5, 1.5]} />
      </InstantTracker>
      <ambientLight intensity={0.5} />
      <spotLight position={[0, 10, 0]} angle={0.3} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
    </ZapparCanvas>
    </div>
  );
}

/*
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import "./App.css";
import HoleMask from "./HoleMask";

function App() {
  return (
    <div className="App">
      <ARButton
        sessionInit={{
          optionalFeatures: ["dom-overlay", "local-floor", "hit-test"],
        }}
      />
      <Canvas>
        <Environment preset="sunset" background={false} />
        <XR
          sessionInit={{
            optionalFeatures: ["dom-overlay", "local-floor", "hit-test"],
          }}
        >
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls />
          <HoleMask />
        </XR>
      </Canvas>
    </div>
  );
}

export default App;
*/
