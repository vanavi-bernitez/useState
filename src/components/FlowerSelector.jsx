import React, { useState } from "react";

const widgetContent = {
  Rose: "The rose is a timeless and classic flower known for its beauty, fragrance, and symbolic significance",
  Sunflower:
    "The sunflower is a cheerful and vibrant flower that symbolizes warmth, happiness, and the beauty of nature",
  Tulip:
    "Tulips are graceful flowers that come in a wide variety of colors and shapes, adding a touch of elegance to any landscape or floral arrangement",
  Iris: "The iris is a captivating flower that boasts intricate patterns and a wide spectrum of colors",
};

const FlowerNumber = () => {
  const names = Object.keys(widgetContent);
  const content = Object.values(widgetContent);
  const [number, setNumber] = useState("");
  const [tittleValue, setTittleValue] = useState("Pick a flower");
  const [contentValue, setContentValue] = useState("...and see the magic");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTittleValue(names[number]);
    setContentValue(content[number]);
    setNumber("");
  };

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div className="flowerNumber">
      <div className="leftSection">
        <h3>Enter a number between 0 to 3</h3>

        <form onSubmit={handleSubmit}>
          <label>
            Enter a number:
            <input
              type="number"
              value={number}
              min={0}
              max={3}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="rightSection">
        <h3>{tittleValue}</h3>
        <p>{contentValue}</p>
      </div>
    </div>
  );
};

export { FlowerNumber };
