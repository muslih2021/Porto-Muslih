import React from "react";
import "./BallCanvas2D.css"; // Buat file ini untuk CSS animasi

const Ball2D: React.FC<{ imgUrl: string }> = ({ imgUrl }) => {
  return (
    <div className="ball2d-container">
      <img src={imgUrl} alt="icon" className="ball2d-image" />
    </div>
  );
};

const BallCanvas: React.FC<{ icon: string }> = ({ icon }) => {
  return (
    <div className="ball2d-wrapper">
      <Ball2D imgUrl={icon} />
    </div>
  );
};

export default BallCanvas;
