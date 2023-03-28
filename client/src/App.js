import React from 'react';
import NavBar from './components/navbar/NavBar';
import {Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import FilmxShow from './Pages/FilmxShow';
import Search from './Pages/Search';
function App() {
  return (
   <>
  
   <NavBar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/title/:id' element={<FilmxShow/>}/>
    <Route path='/search' element={<Search/>}/>
    </Routes>
   </>
  );
}

export default App;
