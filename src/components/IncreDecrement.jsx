import React, { useState } from "react";

const IncrementDecrement = () => {
  const [number, setNumber] = useState(0);
  const handleIncrement = () => {
    if (number < 10) setNumber((futureValue) => futureValue + 1);
  };

  const handleDecrement = () => {
    if (number > 0) setNumber((futureValue) => futureValue - 1);
  };

  return (
    <div className="incrementDecrement">
      <button onClick={handleDecrement}>Decrement</button>
      <p>{number}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export { IncrementDecrement };
