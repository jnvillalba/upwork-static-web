import React from "react";
import Studio from "../Studio/Studio";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goToMarvelIndex = () => navigate("/2023");
  const goToDCIndex = () => navigate("/DC");
  const marvel =
    "https://anthoncode.com/wp-content/uploads/2018/06/marvel-studios-logo-vector.jpg?is-pending-load=1";
  const dc =
    "https://i0.wp.com/www.comicsuniverse.it/wp-content/uploads/2022/12/FkGzHi_XEAA60bL.jpeg?ssl=1";
  return (
    <>
      <div className="container_cards">
        <div className="container_projects">
          <Studio poster={marvel} index={goToMarvelIndex} />
          <Studio poster={dc} index={goToDCIndex} />
        </div>
      </div>
    </>
  );
};

export default Home;
