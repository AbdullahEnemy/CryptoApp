import React from 'react'
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <>
        <footer className="bg-dark text-white text-center py-3 mt-auto">
      <div className="container">
        <h6 className="mb-2">
          Cryptoverse © {new Date().getFullYear()} | All Rights Reserved
        </h6>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/" className="text-white text-decoration-none">Home</Link>
          <Link to="/exchanges" className="text-white text-decoration-none">Exchanges</Link>
          <Link to="/news" className="text-white text-decoration-none">News</Link>
        </div>
      </div>
    </footer>
    </>
  )
}
