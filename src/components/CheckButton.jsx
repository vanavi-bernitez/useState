import React, { useState } from 'react';

const CheckButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <h2>Wanna check the button?</h2>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheck} />
        Check me!
      </label>
      {isChecked && <p>You checked this button!</p>}
    </div>
  );
}

export {CheckButton};
