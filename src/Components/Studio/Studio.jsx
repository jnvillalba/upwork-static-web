import React from "react";

function Studio({ poster, index, video }) {
  return (
    <div className="icon-cards__item d-flex align-items-center justify-content-center">
      <span className="h1">
        <img className="studio" src={poster} alt="Logo" onClick={index} />
      </span>
    </div>
  );
}

export default Studio;
