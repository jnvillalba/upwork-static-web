import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import "./App.css";

import MovieList from "./Components/MovieList";
import { content2023List } from "./Lists/2023list";
import { content2024List } from "../src/Lists/2024list";
import { content2025List } from "./Lists/2025list";
import { content2026List } from "./Lists/2026list";
import { tba } from "./Lists/tba";

import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route
            index
            element={<MovieList año={2023} list={content2023List} />}
          />
          <Route
            exact
            path="/2024"
            element={<MovieList año={2024} list={content2024List} />}
          />
          <Route
            exact
            path="/2025"
            element={<MovieList año={2025} list={content2025List} />}
          />
          <Route
            exact
            path="/2026"
            element={<MovieList año={2026} list={content2026List} />}
          />
          <Route
            exact
            path="/tba"
            element={<MovieList list={tba} />}
          />

          <Route
            exact
            path="*"
            element={<MovieList año={2023} list={content2023List} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

/*<Route exact path='/Categories' element={<ControlledCarousel/>} /> 
<Route exact path='/Categories/:id' element={<CategoryPage />} /> */
