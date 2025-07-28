import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  Navbar,
  CryptoDetails,
  Cryptocurrencies,
  Homepage,
  News,
  Exchanges,
  Footer
} from './components';
import 'antd/dist/reset.css'; // resets global styles for AntD



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
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
