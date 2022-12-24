import React from "react";
import "../App.css";
import MovieCard from "./MovieCard";
import "./styles.css";
import { content2023List } from "./2023list";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const MovieList = ({ año, list }) => {
  const next = año + 1;

  const navigate = useNavigate();
  const goToNext = () => navigate(`/${next}`);
  return (
    <>
      <header>
        <h1 className="header">{año}</h1>
      </header>
      <div className="container">
        <div className="row">
          <Button className="center" variant="danger" onClick={goToNext}>
            {next}
          </Button>
          <ul class="cards">
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
