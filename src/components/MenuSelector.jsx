import React, { useState } from 'react';

const MenuSelector = () => {
  const [selectedItem, setSelectedItem] = useState('');

  const handleItemSelected = (event) => {
    setSelectedItem(event.target.value);
  };

  return (
    <div className="menu">
      <h2>Menu Selector</h2>
      <select value={selectedItem} onChange={handleItemSelected}>
        <option value="">Select an item</option>
        <option value="Apple">Apple</option>
        <option value="Tomatoe">Tomatoe</option>
        <option value="Water">Water</option>
      </select>
      {selectedItem && <p>Selected: {selectedItem}</p>}

    </div>
 
  );
}

export {MenuSelector};

