import React from "react";

export default function ColorDisplay({ color }) {
  return (
    <div
      className="color-display"
      style={{ backgroundColor: color || white}}
    >
      {/* Optional: Add content or leave empty */}
    </div>
  );
}