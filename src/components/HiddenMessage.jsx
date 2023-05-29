import React, { useState } from 'react';

const HiddenMessage = () => {
  const [showMessage, setShowMessage] = useState(false);

  const toggleVisibility = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>See the secret message</button>
      {showMessage && <h2>You got pranked ... or not :P</h2>}
    </div>
  );
}

export {HiddenMessage};
