import React from "react";
import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

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
      <li className="cards_item">
      {poster!="" &&
        <div className="card">
          <div className="poster-container">
            <img src={poster} className="card_image img-poster" />
          </div>
          <div className="card_content">
            <h2 className="card_title">{titulo}</h2>
            
            <p className="card_text" id={tipo}>
              {" "}
              {tipo}
            </p>
            <p className="card_text">
              Estreno: {estreno}</p>
              {estreno!="TBA" &&
            <section className="ticket__buy-btn text-center">
              Faltan: {Math.round(resta / (1000 * 60 * 60 * 24))} Dias
            </section>}
          </div>
        </div>}
      </li>
    </>
  );
};

export default MovieCard;
