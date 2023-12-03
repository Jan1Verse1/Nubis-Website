import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import NubisGo from "../assets/images/MaskGroup.png";
import Corporate from "../assets/images/CorporateW.png";
import Rider from "../assets/images/RiderMan.png";
import "./Services.css";

const Services = () => {
  // useEffect(() => {
  //   // Initialize ScrollReveal
  //   const sr = ScrollReveal({
  //     reset: true, // Reveal elements again on re-scrolling
  //     distance: "80px", // Distance the element moves
  //     duration: 1400, // Duration of the animation
  //     easing: "ease-in-out", // Animation easing
  //   });

  //   // Apply reveal animation to the first phone
  //   sr.reveal(".firstcard", {
  //     origin: "right",
  //     delay: 200,
  //   });

  //   // Apply reveal animation to the second phone
  //   sr.reveal(".midcard", {
  //     origin: "left",
  //     delay: 400,
  //   });

  //   // Apply reveal animation to the third phone
  //   sr.reveal(".lastcard", {
  //     origin: "right", // Change the origin if you want a different direction
  //     delay: 400,
  //   });
  // }, []);

  return (
    <div className="OurServices">
      <h3 className="texts">Our Services</h3>
      <div className="services ">
        <div className="serviceCard ">
          <img
            className="imageee"
            src={NubisGo}
            alt="Someone recieving a package."
          />
          <div className="serviceTexts">
            <h3>Nubis Go</h3>
            <p className="servicecopy">
              From swift deliveries to transparent communication, we're
              dedicated to making every interaction with us a delightful one.
              Your satisfaction drives our commitment to excellence.
            </p>

            <p className="learn">
              EXPLORE MORE
              <FontAwesomeIcon icon={faArrowRightLong} className="arrow" />
            </p>
          </div>
        </div>
        <div className="serviceCard">
          <div className="serviceTexts">
            <h3>Nubis Corporate</h3>
            <p className="servicecopy">
              Benefit from seamless collaboration, cutting-edge technology, and
              unparalleled support. Together, let's redefine the future of
              logistics and unlock new opportunities for growth.
            </p>

            <p className="learn">
              EXPLORE MORE
              <FontAwesomeIcon icon={faArrowRightLong} className="arrow" />
            </p>
          </div>
          <img
            className="imageee"
            src={Corporate}
            alt="A corporate lady with a laptop."
          />
        </div>
        <div className="serviceCard ">
          <img
            className="imageee"
            src={Rider}
            alt="A dispatch rider on his bike."
          />
          <div className="serviceTexts">
            <h3>Nubis Rider</h3>
            <p className="servicecopy">
              Join our team of dedicated riders who play a pivotal role in our
              success story. we offer more than just a job – we provide a
              platform for growth, empowerment, and community.
            </p>

            <p className="learn">
              EXPLORE MORE
              <FontAwesomeIcon icon={faArrowRightLong} className="arrow" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
