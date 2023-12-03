import React, { useState } from "react";
import "./Modal.css";

const FaqModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div className="modalHeader">
          <div className="modalTitle">
            <p>
              *ENSURE YOU ADHERE TO EVERY INSTRUCTION IN THE COURSE OF FILLING
              THE FOUR (4) SECTIONS OF THIS FORM*
            </p>
            <p>
              *ENSURE YOU HAVE THE FOLLOWING ON THIS DEVICE BEFORE LOGGING IN TO
              FILL THIS FORM*
            </p>
          </div>
          <div>
            <span className="close-button" onClick={onClose}>
              <button className="viewBtn" type="button">
                close
              </button>
            </span>
          </div>
        </div>
        <div className="modalDesc">
          <div className="modalText">
            <h4>Please note the following:</h4>
            <ul>
              <li>Professional Passport photograph (.jpg or .png) format</li>
              <li>
                Professional Passport photograph must be with a white background
              </li>
              <li>
                Passport specification must be 1.1inch (width) by 1.4inch
                (length)
              </li>
              <li>File size should not be more than 3MB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqModal;
