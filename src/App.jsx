import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import {
  Navbar,
  CryptoDetails,
  Cryptocurrencies,
  Homepage,
  News,
  Exchanges
} from './components';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/news" element={<News />} />
          <Route path="/crypto/:coinid" element={<CryptoDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
