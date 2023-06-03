import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();
  const goTo1 = () => navigate("/1");
  const goTo2 = () => navigate("/2");
  
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
      <div className="area" onClick={() =>  goTo1()}>
        Área 1
      </div>
      <div className="area" onClick={() =>  goTo2()}>
        Área 2
      </div>
      
    </div>
  );
};

export default Home;
