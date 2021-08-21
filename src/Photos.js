import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <div className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col" key={index}>
                <a href={photo.src.original} target="_blank" rel="nonreffer">
                  <img src={photo.src.landscape} className="img-fluid" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
