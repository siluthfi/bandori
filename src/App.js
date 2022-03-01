import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, } from 'react-router-dom'
import Navbar from './templates/Navbar'
import Bands from './components/Bands'
import Home from './components/Home';
import Chara from './components/Chara';
import Band from './components/Band';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/bands" element={<Bands />} />
          <Route path="/bands/:band" element={<Band />} />
          <Route path="/bands/:band/:member" element={<Chara />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
