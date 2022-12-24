import React from "react";
import "../App.css";
import MovieCard from "./MovieCard";

const Home = () => {
  return (
    <>
      <div className="container">
        <h1 className="center">2023</h1>
        <div className="row">
          <div className="hero-container">
            <MovieCard
              titulo="Ant-Man y la Avispa: Quantumanía"
              tipo="Pelicula"
              poster="https://m.media-amazon.com/images/M/MV5BNDgyNGM4NTYtN2M3MS00YTY2LTk0OWUtZmIzYjg3MmQ0OGM4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"
              estreno="17/02/2023"
            />
            <MovieCard
              titulo="Secret Invasion"
              tipo="Serie"
              poster="https://m.media-amazon.com/images/M/MV5BNTJjNmRiNzAtYTQ0Mi00OTRmLTk4YzUtNjY3ZmM4ZmJlZmM1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"
              estreno="20/03/2023"
            />
            <MovieCard
              titulo="Guardians of the Galaxy Vol. 3"
              tipo="Pelicula"
              poster="https://m.media-amazon.com/images/M/MV5BNmFlMThmYTYtOWNhMi00N2Y5LTljZWItMWQxN2U5OTA5MmFjXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg"
              estreno="05/05/2023"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
