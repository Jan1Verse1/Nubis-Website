import React, { useState, useRef, useEffect } from "react";
import FaqModal from "../Components/Layout/Modal";
import contactModal from "../Components/Layout/ContactUs";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import Logo from "../assets/images/logo.png";

const Header = () => {
  const [isFaqModalOpen, setIsFaqModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const overlayRef = useRef(null);

  const handleFaqClick = () => {
    setIsFaqModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsFaqModalOpen(false);
  };

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
  };

  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/");
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        // Click outside the modal, close it
        handleCloseModal();
        handleCloseContactModal();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

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
          <li onClick={handleFaqClick}>
            <Link>FAQs</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        <button className="thebtn">Get The App</button>
      </div>

      {isFaqModalOpen && (
        <div ref={overlayRef}>
          <FaqModal open={isFaqModalOpen} onClose={handleCloseModal} />
        </div>
      )}
    </header>
  );
};

export default Header;
