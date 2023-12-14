import React from "react";
import logo from "../assets/images/logo.png";
import "./TheFooter.css";
import { Link, useNavigate } from "react-router-dom";
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
              <li>
                {" "}
                <Link to="/Terms">Terms of use</Link>
              </li>
              <li>
                {" "}
                <Link to="/PrivacyPolicy">Privacy policy</Link>
              </li>
            </ul>
          </div>
          <div className="contactt">
            <p>nubis.ng@outlook.com</p>
            <p>+234 906 416 3807</p>
          </div>
          <div className="contactt">
            <p>Follow us on Social Media</p>

            <div className="socialmedia">
              <Link to="/https://www.instagram.com/nubis_logistics/?igshid=YTQwZjQ0NmI0OA%3D%3D">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="socialmediaicon"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="small">
        <p className="smallA">© 2023 Nubis Limited - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
