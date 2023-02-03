import React from "react";

function Studio({ poster, index }) {
  return (
    <div className="image-wrapper">
      <img className="studio" src={poster} alt="Logo" onClick={index} />
    </div>
  );
}

export default Studio;
