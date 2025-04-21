import React, { useEffect, useState, useRef } from "react";

export default function ColorDisplay({ color }) {
  const [displayColor, setDisplayColor] = useState("#FFFFFF"); // Default to white
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Clear any previous timeout
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Reset to white immediately before setting the new color
    setDisplayColor("#FFFFFF");

    // Only set the new color and start the timer if the color is not white
    if (color && color.toUpperCase() !== "#FFFFFF") {
      timeoutRef.current = setTimeout(() => {
        setDisplayColor("#FFFFFF"); // Reset to white after 2 seconds
      }, 2000);

      // Set the new color after resetting to white
      setTimeout(() => {
        setDisplayColor(color);
      }, 0); // Delay by 0ms to ensure reset happens first
    }

    // Cleanup on unmount
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
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