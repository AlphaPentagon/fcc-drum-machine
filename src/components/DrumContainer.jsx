import DrumPad from "./DrumPad.jsx";
import drums from "../libs/drums.js";

const DrumContainer = ({ setCurrentKey }) => {
  return (
    <div>
      {drums.map((drum) => (
        <DrumPad key={drum.letter} drum={drum} setCurrentKey={setCurrentKey} />
      ))}
    </div>
  );
};

export default DrumContainer;
