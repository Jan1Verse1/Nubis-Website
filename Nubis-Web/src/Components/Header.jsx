import React, { useState, useRef, useEffect } from "react";
import FaqModal from "../Components/Layout/Modal";
import ContactModal from "../Components/Layout/ContactModal";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import Logo from "../assets/images/logo.png";

const Header = () => {
  const [isFaqModalOpen, setIsFaqModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const faqOverlayRef = useRef(null);
  const contactOverlayRef = useRef(null);

  const handleFaqClick = () => {
    setIsFaqModalOpen(true);
  };

  const handleCloseFaqModal = () => {
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
      if (
        (faqOverlayRef.current &&
          !faqOverlayRef.current.contains(event.target)) ||
        (contactOverlayRef.current &&
          !contactOverlayRef.current.contains(event.target))
      ) {
        // Click outside the modal, close it
        handleCloseFaqModal();
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
          <li onClick={handleContactClick}>
            <Link>Contact Us</Link>
          </li>
        </ul>

        <button className="thebtn">Get The App</button>
      </div>

      {isFaqModalOpen && (
        <div ref={faqOverlayRef}>
          <FaqModal open={isFaqModalOpen} onClose={handleCloseFaqModal} />
        </div>
      )}
      {isContactModalOpen && (
        <div ref={contactOverlayRef}>
          <ContactModal
            open={isContactModalOpen}
            onClose={handleCloseContactModal}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
