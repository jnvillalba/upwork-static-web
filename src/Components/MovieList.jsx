import React from "react";
import "../App.css";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const MovieList = ({ año, list }) => {
  const next = año + 1;

  const navigate = useNavigate();
  const goToNext = () => navigate(`/${next}`);
  return (
    <>
      <div className="container">
        <div className="row">
          <ul className="cards">
            {list.map((c) => (
              <MovieCard
                key={c.id}
                poster={c.poster}
                titulo={c.titulo}
                estreno={c.estreno}
                tipo={c.tipo}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MovieList;
