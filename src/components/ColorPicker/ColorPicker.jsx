import React, { useEffect, useRef, useCallback, useState } from "react";
import PropTypes from "prop-types";
import "./ColorPicker.css";

const ColorPicker = ({ onColorChange, selectedColor }) => {
  const containerRef = useRef(null);
  const [currentColor, setCurrentColor] = useState(selectedColor || '#FF0000');
  const [selectedPosition, setSelectedPosition] = useState({ x: 0, y: 0 });

  // Convert HSL to HEX
  const hslToHex = useCallback((h, s, l) => {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
  }, []);

  // Handle click on gradient area
  const handleGradientClick = useCallback((event) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Calculate relative position (0-1)
    const relativeX = Math.max(0, Math.min(1, x / rect.width));
    const relativeY = Math.max(0, Math.min(1, y / rect.height));
    
    // Convert position to HSL
    const hue = relativeX * 360;
    const saturation = 100 - (relativeY * 40); // 100% to 60%
    const lightness = 20 + (relativeY * 60); // 20% to 80%
    
    const hexColor = hslToHex(hue, saturation, lightness);
    setCurrentColor(hexColor);
    setSelectedPosition({ x: relativeX * 100, y: relativeY * 100 });
    onColorChange(hexColor);
  }, [hslToHex, onColorChange]);

  // Initialize position based on selected color
  useEffect(() => {
    if (selectedColor) {
      setCurrentColor(selectedColor);
      // For now, set to center - in a real implementation you'd convert hex back to position
      setSelectedPosition({ x: 50, y: 50 });
    }
  }, [selectedColor]);

  return (
    <div className="color-picker-wrapper">
      <div 
        ref={containerRef} 
        className="color-picker-container"
        onClick={handleGradientClick}
      >
        <div className="color-gradient">
          <div 
            className="color-selector" 
            style={{ 
              left: `${selectedPosition.x}%`, 
              top: `${selectedPosition.y}%` 
            }}
          />
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