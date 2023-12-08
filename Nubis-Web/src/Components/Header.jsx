import React, { useState, useRef, useEffect } from "react";
import FaqModal from "../Components/Layout/Modal";
import ContactModal from "../Components/Layout/ContactModal";
import { Link, useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import "./Header.css";
import Logo from "../assets/images/logo.png";

const Header = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };

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
    <div>
      <header className="flex flex-row justify-between align-middle px-4 w-full">
        <div>
          <img
            className="logo"
            src={Logo}
            alt="Nubis logo"
            onClick={navigateHandler}
          />
        </div>
        <div className="header__nav">
          <ul className="md:flex flex-row justify-around hidden ">
            <li className="p-4">
              <Link to="/about">About Us</Link>
            </li>
            <li className="p-4">
              <Link to="/services">Our Services</Link>
            </li>
            <li className="p-4" onClick={handleFaqClick}>
              <Link>FAQs</Link>
            </li>
            <li className="p-4" onClick={handleContactClick}>
              <Link>Contact Us</Link>
            </li>
          </ul>

          <button className="my-4 hidden md:block thebtn">Get The App</button>
          <div>
            <IoMenu
              size={40}
              className="flex my-4 md:hidden"
              onClick={toggleNav}
            />
          </div>
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
      <div>
        <ul
          className={
            nav
              ? "flex flex-col md:hidden absolute top-20 left-20 h-max w-full text-center text-white rounded-md bg-textBlue"
              : "hidden"
          }
        >
          <li className="p-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-4">
            <Link to="/services">Our Services</Link>
          </li>
          <li className="p-4" onClick={handleFaqClick}>
            <Link>FAQs</Link>
          </li>
          <li className="p-4" onClick={handleContactClick}>
            <Link>Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
