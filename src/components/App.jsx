import DrumContainer from "./DrumContainer.jsx";
import { useState } from "react";
import styled from "styled-components";

function App() {
  const [currentKey, setCurrentKey] = useState(null);

  return (
    <DrumMachineWrapper id="drum-machine">
      <Heading>C-R81G Drum Machine</Heading>
      <DrumDisplay id="display">{currentKey}</DrumDisplay>
      <DrumContainer setCurrentKey={setCurrentKey} />
    </DrumMachineWrapper>
  );
}

export default App;

const DrumMachineWrapper = styled.main`
  background-color: #cccccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40vw;
  margin: 0 auto;
  /* border-right: 5px solid black;
  border-bottom: 5px solid black;
  border-top: 2px solid black;
  border-left: 2px solid black; */
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.6) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  border-radius: 0.2rem;
`;

const DrumDisplay = styled.div`
  background-color: #ffdb99;
  padding-inline: 2rem;
  padding-block: 0.8rem;
  border-radius: 0.2rem;
  align-self: start;
  margin-left: 1.5rem;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 10px;
  height: 1rem;
  width: 7rem;
  text-align: center;
`;

const Heading = styled.h1`
  align-self: start;
  margin-left: 1.5rem;
`;
