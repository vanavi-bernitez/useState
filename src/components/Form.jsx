import React, { useState } from "react";

const Form = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const ConfirmInfo = (
    <div className="confirmInfo">
      <p>Info submitted!!</p>
      <p>{formData.firstName}</p>
      <p>{formData.lastName}</p>
    </div>
  );

  const handleChange = ({target}) => {
    setFormData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowMessage(!showMessage);
    console.log(formData);
  };

  return (
    <div>
      <h2>Please enter the next information</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
        {showMessage && ConfirmInfo}
      </form>
    </div>
  );
};

export { Form };
