import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMotorcycle,
  faCreditCard,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import "./Features.css";

const Features = () => {
  return (
    <div className="nubisServices">
      <div className="nubisServicesTexts">
        <h3 className="nubisServicesHead">
          The <span>Nubis </span> Benefits
        </h3>
        <p>Here are the features that will endear us to you.</p>
      </div>
      <div className="features">
        <div className="featureCard">
          <div className="featuresIcon">
            <FontAwesomeIcon icon={faTruckFast} className="featureIcon" />
          </div>
          <div className="featureText">
            <h4>Fast Delivery</h4>
            <p>
              No more delayed or slow deliveries as we offer fast and reliable
              delivery trips from the originating location to your preferred
              locations.
            </p>
          </div>
        </div>
        <div className="featureCard">
          <div className="featuresIcon">
            <FontAwesomeIcon icon={faCreditCard} className="featureIcon" />
          </div>
          <div className="featureText">
            <h4>Fast Delivery</h4>
            <p>
              No more delayed or slow deliveries as we offer fast and reliable
              delivery trips from the originating location to your preferred
              locations.
            </p>
          </div>
        </div>
        <div className="featureCard">
          <div className="featuresIcon">
            <FontAwesomeIcon icon={faMotorcycle} className="featureIcon" />
          </div>
          <div className="featureText">
            <h4>Fast Delivery</h4>
            <p>
              No more delayed or slow deliveries as we offer fast and reliable
              delivery trips from the originating location to your preferred
              locations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
