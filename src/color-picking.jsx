import React, { useState } from 'react';
import './index.css'; 

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <div className="color-picker-wrapper">
      <div className="color-picker-container">
        <h1>Choose your Favorite Color</h1>

        <div className="color-display">
          <p>
            Selected Color:{" "}
            <span
              className="color-box"
              style={{ backgroundColor: color }}
            >
              {color}
            </span>
          </p>
        </div>

        <label>Select a color:</label>
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
          className="color-input"
        />
      </div>
    </div>
  );
}

export default ColorPicker;
