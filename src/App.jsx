import React from 'react'
import {BrowserRouter, Routes, Route}from 'react-router-dom'
import Home from './Components/Home'
import NotFound from './Components/NotFound'
import './App.css'

import MovieList from "./Components/MovieList";
import { content2023List } from "../src/Components/2023list";
import { content2024List } from "../src/Components/2024list";

function App() {

  
  
  return (
  <>
    <BrowserRouter>
      <Routes>    
        <Route index element={<MovieList año={2023} list={content2023List}/>} />
        <Route exact path='/2024' element={<MovieList año={2024} list={content2024List}/>}/> 

        <Route exact path='*' element={<NotFound/>}/>          
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App

/*<Route exact path='/Categories' element={<ControlledCarousel/>} /> 
<Route exact path='/Categories/:id' element={<CategoryPage />} /> */