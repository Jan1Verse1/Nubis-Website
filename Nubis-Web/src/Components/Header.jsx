import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import Logo from "../assets/images/logo.png";

const Header = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <div>
        <img
          className="logo"
          src={Logo}
          alt="Nubis logo"
          onClick={navigateHandler}
        />
      </div>
      <div className="menu">
        <ul className="nav">
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/services">Our Services</Link>
          </li>
          <li>
            <Link to="/faqs">FAQs</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        <button className="thebtn">Get The App</button>
      </div>
    </header>
  );
};

export default Header;
