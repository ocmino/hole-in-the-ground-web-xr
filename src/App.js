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
        <Environment preset="sunset" background={true} />
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
