import React, { useState, useEffect } from "react";
import FAQNews from "../FAQNews";
import "./Modal.css";

const FaqModal = ({ open, onClose }) => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setModalVisible(open);
  }, [open]);

  return (
    <div className={`overlay ${modalVisible ? "open" : ""}`}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`modalContainer ${modalVisible ? "open" : ""}`}
      >
        <div className="modalHeader">
          <div className="modalTitle">
            <h3>Frequently Asked Questions</h3>
          </div>
          {/* <div>
            <span className="close-button" onClick={onClose}>
              <button className="viewBtn" type="button">
                close
              </button>
            </span>
          </div> */}
        </div>
        <FAQNews />
      </div>
    </div>
  );
};

export default FaqModal;
