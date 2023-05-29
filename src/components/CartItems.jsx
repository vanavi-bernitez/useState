import React, { useState } from "react";

const CartItems = () => {
  const [element, setElement] = useState("");
  const [enterElement, setEnterElement] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setEnterElement((enterValue) => [...enterValue, element]);
    setElement("");
  };

  const handleEnter = (event) => {
    setElement(event.target.value);
  };

  return (
    <div className="cartItems">
      <h1>Shoping</h1>
      <label htmlFor="numberIn">Item</label>
      <form onSubmit={handleSubmit}>
        <input
          className="largeInput"
          id="numberIn"
          value={element}
          onChange={handleEnter}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {enterElement.map((single, index) => (
          <li key={`${single}-${index}`}>{single}</li>
        ))}
      </ul>
    </div>
  );
};

export { CartItems };
