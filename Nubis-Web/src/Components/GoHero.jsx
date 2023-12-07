import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import AppStore from "../assets/images/AppStore.png";
import PlayStore from "../assets/images/PlayStore.png";
import Move from "../assets/images/MaskGroup.png";
import "./Hero.css";

const GoHero = () => {
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
    sr.reveal(".move", {
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
          Nubis Go? Your personalized delivery service.
        </h3>
        <p className="headptext headp">
          Nubis is your go-to destination for swift, secure deliveries and a
          modern shopping experience. Your world, your choices — we bring it all
          to you, effortlessly.
        </p>
        <div className="appbuttons buttons">
          <img className="downbtnn" src={AppStore} alt="App Store logo" />
          <img className="downbtnn" src={PlayStore} alt="Play Store logo" />
        </div>
      </div>

      <div className="move">
        {/* <img className="Movte" src={Move} alt="Someone recieving package." /> */}
      </div>
    </div>
  );
};

export default GoHero;
