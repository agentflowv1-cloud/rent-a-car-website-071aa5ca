import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CarDetailsPage from './pages/CarDetailsPage';
import axios from 'axios';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CarDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;