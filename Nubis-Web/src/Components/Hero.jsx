import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Himg from "../assets/images/Framepic.png";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal({
      reset: true, // Reveal elements again on re-scrolling
      distance: "80px", // Distance the element moves
      duration: 1400, // Duration of the animation
      easing: "ease-in-out", // Animation easing
    });

    // Apply reveal animation to head
    sr.reveal(".headtext", {
      origin: "bottom",
      delay: 400,
    });
    // console.log("E dy work for here");

    // Apply reveal animation to headp
    sr.reveal(".headp", {
      origin: "bottom",
      delay: 1200,
    });
    // console.log("E dy work for here 1");
    // Apply reveal animation to the buttons
    sr.reveal(".buttons", {
      origin: "bottom",
      delay: 2400,
    });
    // console.log("E dy work for here 2");
    // Apply reveal animation to the first phone
    sr.reveal(".phone", {
      origin: "right",
      delay: 3000,
    });
    // console.log("E dy work for here 3");
    // Apply reveal animation to the second phone
    sr.reveal(".lastphone", {
      origin: "bottom",
      delay: 4000,
    });
  }, []);

  return (
    <div className="heroscreen">
      <div className="herotexts ">
        <h3 className="HeadTexts headtext">
          More than logistics, we deliver experiences.
        </h3>
        <p className="headptext headp">
          Whether you're a dedicated rider seeking a rewarding career, a
          business partner looking to grow with us, or a valued customer
          expecting top-notch service, we're here to connect, deliver, and
          thrive together.
        </p>
        <div className="appbuttons buttons">
          <button className="thebtton">Explore Nubis</button>
        </div>
      </div>

      <div className="phone">
        {/* <img className="Himg " src={Himg} alt="Delivery service image" /> */}
      </div>
    </div>
  );
};

export default Hero;
