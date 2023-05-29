import React, { useState } from "react";

const PhoneNumberForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleOnChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowMessage(true);
  };

  return (
    <div>
      <h2>Phone Number Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={handleOnChange}
        />
        <button type="submit">Submit</button>
      </form>
      {showMessage && <p>Submitted phone number: {phoneNumber}</p>}
    </div>
  );
};

export { PhoneNumberForm };
