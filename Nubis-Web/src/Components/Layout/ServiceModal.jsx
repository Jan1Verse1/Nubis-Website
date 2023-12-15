import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ServiceModal.css";

const ServiceModal = ({ open, onClose }) => {
  const [ServiceModalVisible, setServiceModalVisible] = useState(false);

  useEffect(() => {
    setServiceModalVisible(open);
  }, [open]);

  return (
    <div className={`overlay ${ServiceModalVisible ? "open" : ""}`}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`modalContainer ${ServiceModalVisible ? "open" : ""}`}
      >
        <div className="">
          <ul className="">
            <li className="">
              <Link to="/NubisGo ">Nubis Go</Link>
            </li>
            <li className="">
              <Link to="/NubisCorp ">Nubis Corporate</Link>
            </li>
            <li className="">
              <Link to="/NubisRider">Nubis Rider</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
