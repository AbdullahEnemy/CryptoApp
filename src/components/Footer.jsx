import React from "react";
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
 <Link
  to="/"
  className={`nav-link ${location.pathname === "/" ? "text-lg font-semibold" : "text-base"}`}
>
  Home
</Link>

<Link
  to="/exchanges"
  className={`nav-link ${location.pathname === "/exchanges" ? "text-lg font-semibold" : "text-base"}`}
>
  Exchanges
</Link>

<Link
  to="/news"
  className={`nav-link ${location.pathname === "/news" ? "text-lg font-semibold" : "text-base"}`}
>
  News
</Link>

          </div>
        </div>
      </footer>
    </>
  );
};
