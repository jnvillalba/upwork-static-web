import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/MovieCard.css";


const MovieCard = ({ titulo, tipo, poster, estreno }) => {
  const navigate = useNavigate();
  const goToHome = () => navigate("/");

  const fechaDia = estreno[0] + estreno[1];
  const fechaMes = estreno[3] + estreno[4];
  const fechaAño = estreno[6] + estreno[7] + estreno[8] + estreno[9];
  const fecha2 = new Date();

  let fecha1 = new Date(fechaAño + "/" + fechaMes + "/" + fechaDia);

  let resta = fecha1.getTime() - fecha2.getTime();

  return (
    <>
      <div className="main-container">
        <div className="poster-container">
          <img src={poster} className="poster" />
        </div>
        <div className="ticket-container">
          <div className="ticket__content">
            <h4 className="ticket__movie-title">{titulo}</h4>

            <p className="ticket__current-price">{tipo}</p>
            <p className="ticket__old-price">{estreno}</p>
            <button className="ticket__buy-btn">
              Faltan: {Math.round(resta / (1000 * 60 * 60 * 24))} Dias
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
