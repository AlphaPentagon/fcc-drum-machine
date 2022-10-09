import DrumContainer from "./DrumContainer.jsx";
import { useState } from "react";

function App() {
  const [currentKey, setCurrentKey] = useState(null);

  return (
    <main id="drum-machine">
      <h1>Drum Machine</h1>
      <h2 id="display">{currentKey}</h2>
      <DrumContainer setCurrentKey={setCurrentKey} />
    </main>
  );
}

export default App;
