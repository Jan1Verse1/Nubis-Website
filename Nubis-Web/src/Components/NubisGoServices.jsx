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
        <div className="servicesImagesLeft">
          {" "}
          <h3 className="imagesTag">Nubis Move</h3>{" "}
        </div>
        <div className="servicesImagesRight">
          <div className="servicesImagesTop">
            <div className="servicesImagesTop1">
              <h3 className="imagesTag">Nubis Food</h3>{" "}
            </div>
            <div className="servicesImagesTop2">
              <h3 className="imagesTag">Nubis Stores</h3>{" "}
            </div>
          </div>
          <div className="servicesImagesBottom">
            <h3 className="imagesTag">Nubis Travel</h3>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
