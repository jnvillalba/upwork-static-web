import React from 'react'
import {BrowserRouter, Routes, Route}from 'react-router-dom'
import Home from './Components/Home'
import NotFound from './Components/NotFound'
import './App.css'
import NavBar from './Components/NavBar'



function App() {
  
  return (
  <>
    <BrowserRouter>
      <Routes>    
        <Route index element={<Home/>} />
        

        <Route exact path='*' element={<NotFound/>}/>          
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App

/*<Route exact path='/Categories' element={<CategoriesRoute />} /> 
<Route exact path='/Categories/:id' element={<CategoryPage />} /> */