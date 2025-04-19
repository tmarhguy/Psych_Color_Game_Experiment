import React, { useEffect, useRef } from "react";
import colorWheel from "../assets/images/colorwheel.jpeg";

const ColorPicker = ({ onColorChange }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.src = colorWheel;

    // Function to resize the canvas dynamically
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.offsetWidth * 0.495; // Set canvas width to parent width
      canvas.height = (parent.offsetWidth * 0.185); // Maintain aspect ratio (694x439)
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    };

    image.onload = () => {
      resizeCanvas(); // Draw the image when it loads
      window.addEventListener("resize", resizeCanvas); // Redraw on window resize
    };

    return () => {
      window.removeEventListener("resize", resizeCanvas); // Cleanup event listener
    };
  }, []);

  const handleCanvasClick = (event) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const [r, g, b, a] = pixel;

    if (a === 0) {
      console.log("Clicked on a transparent area.");
      return;
    }

    const hexColor = `#${((1 << 24) + (r << 16) + (g << 8) + b)
      .toString(16)
      .slice(1)}`;

    console.log("Selected Color (HEX):", hexColor);
    onColorChange(hexColor);
  };

  return (
    <canvas
      ref={canvasRef}
      className="color-picker"
      onClick={handleCanvasClick}
    />
  );
};

export default ColorPicker;