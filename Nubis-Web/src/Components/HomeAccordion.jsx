import React, { useState } from "react";
import "./FAQNews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const HomeAccordion = ({ Question, Answer }) => {
  const [isActive, setIsActive] = useState(false);

  const handleAccordionClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="accordionitem">
      <div className="accordiontitle" onClick={handleAccordionClick}>
        <div>{Question}</div>
        <div>
          {isActive ? (
            <FontAwesomeIcon icon={faChevronDown} className="faqicon" />
          ) : (
            <FontAwesomeIcon icon={faChevronRight} className="faqicon" />
          )}
        </div>
      </div>
      {isActive && <div className="accordioncontent">{Answer}</div>}
    </div>
  );
};

export default HomeAccordion;
