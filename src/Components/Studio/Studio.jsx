import React from "react";
import cosha from "cosha";
import { useNavigate } from "react-router-dom";


function Studio() {
  cosha("colorful-shadow", {
    blur: "20px",
    brightness: "125%",
    saturation: "110%",
    x: "2px",
    y: "6px",
  });
  
  const navigate = useNavigate();
  const goToIndex = () => navigate("/2023");
  return (
    <div className="container">
      <div className="container_cards">
        <div className="container_projects">
          <div className="image-wrapper">
            <img
              className="colorful-shadow"
              src="https://anthoncode.com/wp-content/uploads/2018/06/marvel-studios-logo-vector.jpg?is-pending-load=1"
              width="400"
              alt="Logo"
              onClick={() => goToIndex()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Studio;
