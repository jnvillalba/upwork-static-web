import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/MovieCard.css";

const MovieCard = (titulo, tipo, poster, estreno) => {
  const navigate = useNavigate();
  const goToHome = () => navigate("/");

  return (
    <>
      <div className="hero-container">
        <div className="main-container">
          <div className="poster-container">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNDgyNGM4NTYtN2M3MS00YTY2LTk0OWUtZmIzYjg3MmQ0OGM4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"
              className="poster"
            />
          </div>
          <div className="ticket-container">
            <div className="ticket__content">
              <h4 className="ticket__movie-title">
                Ant-Man y la Avispa: Quantumanía
              </h4>

              <p className="ticket__current-price">Pelicula</p>
              <p className="ticket__old-price">17/02/2023</p>
              <button className="ticket__buy-btn">Faltan: Dias</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
