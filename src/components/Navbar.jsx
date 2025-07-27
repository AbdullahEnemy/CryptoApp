import React from "react";
import { Avatar } from "antd";
import { Link } from "react-router-dom";
import icon from "../images/cryptocurrency.png";
import { useLocation } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FunctionOutlined,
  MenuOutlined,
  UserOutlined,
  FundOutlined,
} from "@ant-design/icons";
export const Navbar = () => {
  let location = useLocation();
  return (
   <nav className="navbar navbar-expand-lg bg-dark navbar-dark">


      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <Avatar src={icon} size="large" className="mx-2" />
          Cryptoverse
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
                icon={<HomeOutlined/>}
              >
                Home
              </Link>
            </li>

            <li className="nav-item" >
              <Link
                className={`nav-link ${
                  location.pathname === "/cryptocurrencies" ? "active" : ""
                }`}
                to="/cryptocurrencies"
              >
                Cryptocurrencies
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/exchanges" ? "active" : ""
                }`}
                to="/exchanges"
              >
                Exchanges
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/news" ? "active" : ""
                }`}
                to="/news"
              >
                News
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
