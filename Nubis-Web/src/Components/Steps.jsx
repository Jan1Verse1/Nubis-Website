import React from "react";
import download from "../assets/images/Download.png";
import profile from "../assets/images/Profile.png";
import bike from "../assets/images/bike.png";
import home from "../assets/images/Home.png";
import "./Steps.css";

const NubisSteps = () => {
  return (
    <div className="nubisServices">
      <div className="nubisServicesTexts">
        <h3 className="nubisServicesHead">
          <span>Steps </span> to Using Nubis
        </h3>
        <p>Here are the features that will endear us to you.</p>
      </div>
      <div className="Steps">
        <div className="eachStep">
          <h2 className="eachSteptext">1</h2>
          <div className="stepCard">
            <div className="stepImage">
              <img src={download} alt="download" />
            </div>
            <p>Download the app</p>
          </div>
        </div>
        <div className="eachStep">
          <h2 className="eachSteptext">2</h2>
          <div className="stepCard">
            <div className="stepImage">
              <img src={profile} alt="profile" />
            </div>
            <p>Set up your profile</p>
          </div>
        </div>
        <div className="eachStep">
          <h2 className="eachSteptext">3</h2>
          <div className="stepCard">
            <div className="stepImage">
              <img src={bike} alt="order bike" />
            </div>
            <p>May your first order</p>
          </div>
        </div>
        <div className="eachStep">
          <h2 className="eachSteptext">4</h2>
          <div className="stepCard">
            <div className="stepImage">
              <img src={home} alt="Home" />
            </div>
            <p>Your package in way</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NubisSteps;
