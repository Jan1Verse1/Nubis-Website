import React from "react";
import HomeAccordion from "./HomeAccordion";
import { HomeAccordionData } from "../Components/Layout/HomeAccordionContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faThreads,
  faLinkedinIn,
  faXTwitter,
  faInstagram,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import "./FAQNews.css";

const FAQNews = () => {
  return (
    <div className="News">
      <div className="FAQs">
        <div className="accordion">
          {HomeAccordionData.map(({ Question, Answer }) => (
            <HomeAccordion key={Question} Question={Question} Answer={Answer} />
          ))}
        </div>
      </div>
      <div className="newsletter">
        <div className="tag">
          <h6>Let's Talk</h6>
        </div>
        <div className="Question">
          <h3>
            Can’t find answers to your <br /> question? Send us a message.
          </h3>
        </div>
        <div className="callus">
          <div className="calltext">
            <FontAwesomeIcon icon={faPhone} className="call" />
            <p className="newstextP">
              Have Any Questions <br />
              +234 906 416 3807
            </p>
          </div>
          <div className="socialmedia">
            {/* <FontAwesomeIcon icon={faFacebookF} className="socialmediaicon" /> */}
            <FontAwesomeIcon icon={faInstagram} className="socialmediaicon" />
            {/* <FontAwesomeIcon icon={faXTwitter} className="socialmediaicon" />
            <FontAwesomeIcon icon={faLinkedinIn} className="socialmediaicon" />
            <FontAwesomeIcon icon={faThreads} className="socialmediaicon" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQNews;
