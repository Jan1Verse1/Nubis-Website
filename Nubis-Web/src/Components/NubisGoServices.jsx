import React from "react";
import "./NubisGoServices.css";

const Services = () => {
  return (
    <div className="nubisServices">
      <div className="nubisServicesTexts">
        <h3 className="nubisServicesHead">
          Our <span>Services </span> to you
        </h3>
        <p>These are the services we render for you at Nubis.</p>
      </div>
      <div className="servicesImages">
        <div className="servicesImagesLeft">Nubis Move</div>
        <div className="servicesImagesRight">
          <div className="servicesImagesTop">
            <div className="servicesImagesTop1">Nubis Food</div>
            <div className="servicesImagesTop2">Nubis Stores</div>
          </div>
          <div className="servicesImagesBottom">Nubis Travel</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
