import React, { useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";

const ColorPicker = ({ onColorChange }) => {
  const canvasRef = useRef(null);
  const gradientCacheRef = useRef(null);

  const drawGradient = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Horizontal gradient
    const gradientX = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradientX.addColorStop(0.00, "#FF0000"); // Red
    gradientX.addColorStop(0.17, "#FFFF00"); // Yellow
    gradientX.addColorStop(0.34, "#00FF00"); // Green
    gradientX.addColorStop(0.51, "#0000FF"); // Blue
    gradientX.addColorStop(0.68, "#4B0082"); // Indigo
    gradientX.addColorStop(0.85, "#EE82EE"); // Violet
    gradientX.addColorStop(1.00, "#FFFFFF"); // White

    ctx.fillStyle = gradientX;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Vertical gradient for brightness
    const gradientY = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradientY.addColorStop(0, "rgba(0, 0, 0, 0)"); // Transparent
    gradientY.addColorStop(1, "rgba(0, 0, 0, 1)"); // Black

    ctx.fillStyle = gradientY;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const parent = canvas.parentElement;
    if (!parent) return;

    // Set the canvas resolution size to match its CSS size
    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;

    // Redraw the gradient
    drawGradient();
  }, [drawGradient]);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [resizeCanvas]);

  const handleCanvasClick = useCallback((event) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    // Map the click coordinates to the canvas resolution
    const x = ((event.clientX - rect.left) / rect.width) * canvas.width;
    const y = ((event.clientY - rect.top) / rect.height) * canvas.height;

    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const [r, g, b, a] = pixel;

    if (a === 0) return; // Ignore transparent clicks

    // Convert the color to a hex string
    const hexColor = `#${((1 << 24) + (r << 16) + (g << 8) + b)
      .toString(16)
      .slice(1)
      .toUpperCase()}`;

    onColorChange(hexColor);
  }, [onColorChange]);

  return (
    <canvas
      ref={canvasRef}
      className="color-picker"
      onClick={handleCanvasClick}
    />
  );
};

ColorPicker.propTypes = {
  onColorChange: PropTypes.func.isRequired,
};

export default ColorPicker;