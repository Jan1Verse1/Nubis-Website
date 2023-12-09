import React from "react";
import download from "../assets/images/Download.png";
import profile from "../assets/images/Profile.png";
import bike from "../assets/images/bike.png";
import home from "../assets/images/Home.png";
import "./Partnership.css";

const Partnership = () => {
  return (
    <div className="nubisServices">
      <div className="nubisServicesTexts">
        <h3 className="nubisServicesHead">
          We take our <span>Partnerships </span> seriously
        </h3>
        <p>You can be rest assured that we will make it worth your while</p>
      </div>
      <div className="partnertalks">
        <div className="partnercards">
          <div className="partneroffercard">
            <h4>Real time Monitoring</h4>
            <p>
              We offer our partners the feature to monitor their investment in
              Nubis in real time. You can monitor and get updates as they
              happen. Data on rides, location of riders and profits are
              available for you.
            </p>
            <p>We value transparency above all else.</p>
          </div>
          <div className="partneroffercard">
            <h4>Returns on Investment</h4>
            <p>
              As a partner, you become an integral part of the Nubis family. We
              share our profits together. Our partners enjoy huge interests and
              returns on their investments. Partner with us today
            </p>
            <p>Partner with us today</p>
          </div>
        </div>

        <div className="ourNumbers">
          <div className="numbersTexts">
            <h5>Number of Partners</h5>
            <h1>27+</h1>
          </div>
          <div className="numbersTexts">
            <h5>Value of Investments</h5>
            <h1>$7M+</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
