import DrumPad from "./DrumPad.jsx";
import drums from "../libs/drums.js";
import styled from "styled-components";

const DrumContainer = ({ setCurrentKey }) => {
  return (
    <DrumMachine>
      {drums.map((drum) => (
        <DrumPad
          key={drum.letter}
          drum={drum}
          color={drum.color}
          setCurrentKey={setCurrentKey}
        />
      ))}
    </DrumMachine>
  );
};

const DrumMachine = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 35vw;
  height: 35vw;
  margin: auto auto;
  gap: 0.8rem;
  background-color: #cccccc;
  padding: 1.5rem;
`;

export default DrumContainer;
