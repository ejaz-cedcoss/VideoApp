import { useState } from "react";

// eslint-disable-next-line react/prop-types
const PlayButton = ({ msg, onPlay, onPause, children }) => {
  const [playing, setPlaying] = useState(false);
  function handleClick(e) {
    if (playing) {
      onPause(msg);
    } else {
      onPlay(msg);
    }
    setPlaying(!playing);
    e.stopPropagation();
  }
  return (
    <>
      <button onClick={handleClick}>
        {children} {playing ? "⏸" : "⏯"}
      </button>
    </>
  );
};

export default PlayButton;
