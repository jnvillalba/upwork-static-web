import React from "react";
import { useNavigate } from "react-router-dom";
import "./NewMovieCard.css";


const MovieCard = ({ titulo, tipo, poster, estreno, poster2 }) => {
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
    
      {poster !== "" && (
        <div className="card">
          {estreno !== "TBA" && (
            <div class="date" id={tipo}>
              {Math.round(resta / (1000 * 60 * 60 * 24))} Días
            </div>
          )}
          <div className="image">
            <img src={poster} alt="poster" />
          </div>
          <div className="details">
            <div className="back">
              <img src={poster2? poster2: poster }alt="poster" />

              <div className="center">
                <h1>
                  {titulo}
                  <br />
                </h1>
                <p>Estreno: {estreno}</p>
                <p id={tipo}>{tipo}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;
