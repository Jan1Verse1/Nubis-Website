import React, { useEffect } from "react";
import AppStore from "../assets/Images/AppStore.png";
import PlayStore from "../assets/Images/PlayStore.png";
import "./JoinCorp.css";

const Join = () => {
  return (
    <div className="joinn">
      <div className="corpJoin">
        <div className="corpJointexts ">
          <h3 className="corpJoinHeadTexts">Join Nubis Corporate today!</h3>
          <p className="corpJoinptext ">
            Become a part of the Nubis business today and enjoy huge returns on
            your investments.
          </p>
          <div className="appbuttonss ">
            <button className="thebtton">Let's Talk</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
