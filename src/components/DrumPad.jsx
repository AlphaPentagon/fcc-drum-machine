import { useState, useEffect } from "react";

const DrumPad = ({ drum, setCurrentKey }) => {
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const newAudio = document.querySelector(`#${drum.letter}`);
    setAudio(newAudio);
    window.addEventListener("keydown", handleKey);
    window.addEventListener("keyup", handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audio]);

  const handleClick = () => {
    console.log(audio);
    audio.play();
    setCurrentKey(drum.name);
  };

  const handleKey = (e) => {
    if (audio) {
      if (e.key.toLowerCase() === drum.letter.toLowerCase()) {
        if (e.type === "keyup") {
          audio.play();
          setCurrentKey(drum.name);
        }
        if (e.type === "keydown") audio.pause();
      }
    }
  };

  return (
    <button
      className="drum-pad"
      id={drum.name}
      onClick={handleClick}
      onKeyDown={handleKey}
    >
      <audio className="clip" src={drum.sound_path} id={drum.letter}></audio>
      {drum.letter}
    </button>
  );
};

export default DrumPad;
