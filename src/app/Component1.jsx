import React from "react";
import "./FitnessComponent.css"; 

const Component1 = () => {
  return (
    <div className="fitness-container">
      <div className="fitness-images">
        <div className="fitness-card small">
          <img
            src="/Strength-and-Power-in-Weightlifting.jpg"
            alt="Strength"
            className="fitness-image"
          />
          <div className="fitness-text">STRENGTH</div>
        </div>
        <div className="fitness-card large">
          <img
            src="/3448d6cd-d40d-456c-b96d-0ef201c7dcac.jpg"
            alt="Mobility"
            className="fitness-image"
          />
          <div className="fitness-text">MOBILITY</div>
        </div>
        <div className="fitness-card small">
          <img
            src="/761_main-10.jpg"
            alt="Drills"
            className="fitness-image"
          />
          <div className="fitness-text">DRILLS</div>
        </div>
      </div>
    </div>
  );
};

export default Component1;
