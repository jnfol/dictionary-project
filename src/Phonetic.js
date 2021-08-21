import React from "react";
import "./Phonetics.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="blank">
        <i class="fas fa-volume-up"> </i>
      </a>
      <em className="PhoneticsText"> /{props.phonetic.text}/</em>
    </div>
  );
}
