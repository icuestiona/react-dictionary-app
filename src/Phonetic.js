import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
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
        <span className="sound">
          <FontAwesomeIcon icon={faPlay} onClick={playAudio} />
        </span>
        <span className="text">{props.phonetic.text}</span>
      </span>
    );
  } else {
    return null;
  }
}
