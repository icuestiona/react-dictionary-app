import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  const PhoneticsAudio = props.phonetic.audio;

  function playAudio() {
    const audio = new Audio(PhoneticsAudio);
    audio.play();
  }
  if (props.phonetic.audio) {
    return (
      <span className="Phonetic phonetic-block">
        <span>
          <i class="fa-solid fa-play" onClick={playAudio}>
            {" "}
          </i>
        </span>
        <span className="text">{props.phonetic.text}</span>
      </span>
    );
  } else {
    return null;
  }
}
