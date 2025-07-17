import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

export default function ColorDisplay({ color }) {
  const [displayColor, setDisplayColor] = useState("#FFFFFF");
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Clear any previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // Only set the new color and start the timer if the color is not white
    if (color && color.toUpperCase() !== "#FFFFFF") {
      setDisplayColor(color);
      
      timeoutRef.current = setTimeout(() => {
        setDisplayColor("#FFFFFF");
        timeoutRef.current = null;
      }, 2000);
    } else {
      setDisplayColor("#FFFFFF");
    }

    // Cleanup on unmount or dependency change
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [color]);

  return (
    <div
      className="color-display"
      style={{ backgroundColor: displayColor }}
    >
      {/* Optional: Add content or leave empty */}
    </div>
  );
}

ColorDisplay.propTypes = {
  color: PropTypes.string.isRequired,
};