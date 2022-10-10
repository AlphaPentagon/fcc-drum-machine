import { useState, useEffect } from "react";
import styled from "styled-components";

const DrumPad = ({ drum, setCurrentKey, color }) => {
  const [audio, setAudio] = useState(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const newAudio = document.querySelector(`#${drum.letter}`);
    setAudio(newAudio);
    window.addEventListener("keydown", handleKey);
    window.addEventListener("keyup", handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audio]);

  const handleClick = () => {
    if (audio) {
      audio.play();
      setCurrentKey(drum.name);
    }
  };

  const handleKey = (e) => {
    if (audio) {
      if (e.key.toLowerCase() === drum.letter.toLowerCase()) {
        if (e.type === "keydown") {
          setActive(true);
          audio.play();
          setCurrentKey(drum.name);
        } else if (e.type === "keyup") {
          setActive(false);
        }
      }
    }
  };

  return (
    <DrumButton
      className={`drum-pad ${active ? "active" : ""}`}
      id={drum.name}
      onClick={handleClick}
      color={color}
    >
      <audio className="clip" src={drum.sound_path} id={drum.letter}></audio>
      {drum.letter}
    </DrumButton>
  );
};

const handleBackgroundColor = (color) => {
  switch (color) {
    case "blue":
      return "#b3c8fa";
    case "green":
      return "#95b19f";
    case "red":
      return "#f58ea6";
    default:
      return "#858585";
  }
};

const DrumButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => handleBackgroundColor(color)};
  box-shadow: rgba(6, 24, 44, 0.2) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.5) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  border: none;
  border-radius: 0.1rem;
  opacity: ${(props) => props.className.includes("active") && 0.6};
  font-size: 1.5rem;

  &:hover {
    opacity: 0.6;
  }
`;

export default DrumPad;
