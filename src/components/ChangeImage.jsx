import React, { useState } from "react";
import djcolored from "../images/dj1.png";
import djbinary from "../images/dj2.png";

const CheckImage = () => {
  const [isCheckedColored, setIsCheckedColored] = useState(true);
  const [isCheckedByW, setIsCheckedByW] = useState(false);

  const handleCheckColor = () => {
    setIsCheckedColored(!isCheckedColored);
    setIsCheckedByW(false);
  };

  const handleCheckByW = () => {
    setIsCheckedByW(!isCheckedByW);
    setIsCheckedColored(false);
  };

  return (
    <div>
      <h2>Select print style</h2>
      <label>
        <input type="checkbox" checked={isCheckedColored} onChange={handleCheckColor} />
        Colored
      </label>
      <label>
        <input type="checkbox" checked={isCheckedByW} onChange={handleCheckByW} />
        Black&White
      </label>
      {isCheckedColored && <img src={djcolored} alt="dj colored" />}
      {isCheckedByW && <img src={djbinary} alt="dj black and white" />}
    </div>
  );
};

export { CheckImage };
