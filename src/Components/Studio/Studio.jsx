import React from "react";

function Studio({ poster, index, video }) {
  return (
    <div className="icon-cards__item d-flex align-items-center justify-content-center">
      <img className="studio" src={poster} alt="Logo" onClick={index} />
    </div>
  );
}

export default Studio;
