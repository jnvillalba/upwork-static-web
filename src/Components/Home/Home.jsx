import React from "react";
import Studio from "../Studio/Studio";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goToMarvelIndex = () => navigate("/2023");
  const goToDCIndex = () => navigate("/DC");
  const goToSonyIndex = () => navigate("/Sony");

  const marvel =
    "https://anthoncode.com/wp-content/uploads/2018/06/marvel-studios-logo-vector.jpg?is-pending-load=1";

  const dc =
    "https://i0.wp.com/www.comicsuniverse.it/wp-content/uploads/2022/12/FkGzHi_XEAA60bL.jpeg?ssl=1";

  const sony =
    "https://pbs.twimg.com/media/FXufOEcVUAAt_Ts?format=jpg&name=large";

  const vMarvel =
    "https://drive.google.com/uc?export=download&id=1YENCr-RMxstzd3oyLWhqvbCQeJT94e23";
  //"./../../assets/marvel.mp4";
  const vDC = "../../assets/dc.mp4";
  const vSony = "../../assets/sony.mp4";

  return (
    <>
      <div className="container container d-flex justify-content-center container_cards mt-5">
        <h1 className="año">Studios</h1>
        <div className="container_projects">
          <figure class="icon-cards mt-3">
            <div class="icon-cards__content">
              <Studio poster={marvel} index={goToMarvelIndex} video={vMarvel} />
              <Studio poster={dc} index={goToDCIndex} video={vDC} />
              <Studio poster={sony} index={goToSonyIndex} video={vSony} />
            </div>
          </figure>
        </div>
      </div>
    </>
  );
};

export default Home;
