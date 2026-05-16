import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useStore } from './store';
import Home from './pages/Home';
import CarCatalog from './pages/CarCatalog';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-catalog" element={<CarCatalog />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;