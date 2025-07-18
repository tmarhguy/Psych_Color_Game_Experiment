import React, { useEffect, useRef, useCallback, useState } from "react";
import PropTypes from "prop-types";
import "./ColorPicker.css";

const ColorPicker = ({ onColorChange, selectedColor }) => {
  const containerRef = useRef(null);
  const [currentColor, setCurrentColor] = useState(selectedColor || '#FF0000');

  // Create a fixed-size color grid
  const createColorGrid = useCallback(() => {
    const colors = [];
    const gridSize = 12; // 12x8 grid
    const rows = 8;
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < gridSize; col++) {
        // Create HSL color based on position
        const hue = (col / gridSize) * 360;
        const saturation = 100 - (row / (rows - 1)) * 40; // 100% to 60%
        const lightness = 20 + (row / (rows - 1)) * 60; // 20% to 80%
        
        const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        colors.push(color);
      }
    }
    
    return colors;
  }, []);

  const handleColorClick = useCallback((color) => {
    // Convert HSL to HEX
    const tempDiv = document.createElement('div');
    tempDiv.style.color = color;
    document.body.appendChild(tempDiv);
    const computedColor = window.getComputedStyle(tempDiv).color;
    document.body.removeChild(tempDiv);
    
    // Parse RGB and convert to HEX
    const rgb = computedColor.match(/\d+/g);
    if (rgb && rgb.length >= 3) {
      const hex = `#${parseInt(rgb[0]).toString(16).padStart(2, '0')}${parseInt(rgb[1]).toString(16).padStart(2, '0')}${parseInt(rgb[2]).toString(16).padStart(2, '0')}`.toUpperCase();
      setCurrentColor(hex);
      onColorChange(hex);
    }
  }, [onColorChange]);

  const colors = createColorGrid();

  return (
    <div className="color-picker-wrapper">
      <div className="color-picker-header">
        <span className="color-picker-label">Select Color</span>
        <div 
          className="color-preview" 
          style={{ backgroundColor: currentColor }}
          title={currentColor}
        >
          {currentColor}
        </div>
      </div>
      <div ref={containerRef} className="color-picker-container">
        <div className="color-grid">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`color-swatch ${currentColor === color ? 'selected' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
              title={color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

ColorPicker.propTypes = {
  onColorChange: PropTypes.func.isRequired,
  selectedColor: PropTypes.string,
};

export default ColorPicker;