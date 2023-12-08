import React, { useEffect } from "react";
import AppStore from "../assets/Images/AppStore.png";
import PlayStore from "../assets/Images/PlayStore.png";
import "./Join.css";

const Join = () => {
  return (
    <div className="join">
      <div className="BlueJoin">
        <div className="BlueJointexts ">
          <h3 className="BlueJoinHeadTexts">Join Nubis now!</h3>
          <p className="joinptext ">
            Download the Nubis app now and enjoy premium delivery services and
            more.
          </p>
          <div className="appbuttonss ">
            <img className="downbtnn" src={AppStore} alt="App Store logo" />
            <img className="downbtnn" src={PlayStore} alt="Play Store logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
