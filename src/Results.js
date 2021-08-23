import React from "react";
import Meaning from "./Meaning";
import "./Results.css";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="ShowResults">
        <div className="row">
          <h2 className="searchedWord">{props.results.word}</h2>{" "}
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div className="Phonetics">
                <div key={index}>
                  <Phonetic phonetic={phonetic} />
                </div>
              </div>
            );
          })}
        </div>
        <hr />
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
