"use client"
import React, { useState, useEffect } from "react";
import "./FitnessComponent.css";

const Component1 = () => {
  const [selected, setSelected] = useState(() => {
    
    const savedIndex = localStorage.getItem("selectedIndex");
    return savedIndex !== null ? parseInt(savedIndex, 10) : 1;
  });

  useEffect(() => {
    localStorage.setItem("selectedIndex", selected);
  }, [selected]);

  const handleMouseEnter = (index) => {
    setSelected(index); 
  };

  return (
    <div className="fitness-container">
      <div className="fitness-images">
        <div
          className={`fitness-card ${selected === 0 ? "large" : "small"}`}
          onMouseEnter={() => handleMouseEnter(0)}
        >
          <img
            src="/Strength-and-Power-in-Weightlifting.jpg"
            alt="Strength"
            className="fitness-image"
          />
          <div className="fitness-text">STRENGTH</div>
        </div>
        <div
          className={`fitness-card ${selected === 1 ? "large" : "small"}`}
          onMouseEnter={() => handleMouseEnter(1)}
        >
          <img
            src="/3448d6cd-d40d-456c-b96d-0ef201c7dcac.jpg"
            alt="Mobility"
            className="fitness-image"
          />
          <div className="fitness-text">MOBILITY</div>
        </div>
        <div
          className={`fitness-card ${selected === 2 ? "large" : "small"}`}
          onMouseEnter={() => handleMouseEnter(2)}
        >
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
