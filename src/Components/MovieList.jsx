import React from "react";
import "../App.css";
import MovieCard from "../Components/NewMovieCard/NewMovieCard";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../styles.scss";

const MovieList = ({ año, list }) => {
  const next = año + 1;

  const navigate = useNavigate();
  const goToNext = () => navigate(`/${next}`);
  return (
    <>
      <div className="container">
      
        <div className="container_cards">
        <h1 className="año">{año? año : "TBA"}</h1>
          <div className="container_projects">
            
            {list.map((c) => (
              <MovieCard
                key={c.id}
                poster={c.poster}
                titulo={c.titulo}
                estreno={c.estreno}
                tipo={c.tipo}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
