import React from "react";
import logo from "../assets/images/logo.png";
import "./TheFooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThreads,
  faLinkedinIn,
  faXTwitter,
  faInstagram,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="main">
        <div className="Nlogo">
          <img src={logo} alt="Nubis logo" />
        </div>
        <div className="links">
          <div className="men">
            <ul className="navlinks">
              <li>Terms of use</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="contactt">
            <p>info@nubis.com</p>
            <p>+234 806 731 8885</p>
          </div>
          <div className="contactt">
            <p>Follow us on Social Media</p>
            <div className="socialmedia">
              <FontAwesomeIcon icon={faFacebookF} className="socialmediaicon" />
              <FontAwesomeIcon icon={faInstagram} className="socialmediaicon" />
              <FontAwesomeIcon icon={faXTwitter} className="socialmediaicon" />
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="socialmediaicon"
              />
              <FontAwesomeIcon icon={faThreads} className="socialmediaicon" />
            </div>
          </div>
        </div>
      </div>
      <div className="small">
        <p className="smallA">© 2023 Nubis Limited - All Rights Reserved</p>

        {/* <div className="terms">
          <p className="smallA">Terms of use </p>
          <p className="smallA">Privacy policy </p>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
