import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Project from './pages/project/Project';

import './style.css';


function App() {
  return (
    <div class="wrap">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="about" element={<About/>}></Route>
          <Route path="project" element={<Project/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
