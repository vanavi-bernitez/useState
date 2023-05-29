import React, { useState } from "react";

const InputValue = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a value"
      />
      <h3>Input Value: {inputValue}</h3>
    </div>
  );
};

export { InputValue };
