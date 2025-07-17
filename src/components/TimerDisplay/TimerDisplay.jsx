import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./TimerDisplay.css";

export default function TimerDisplay({ timer, setTimer, onTimerEnd }) {
  const canvasRef = useRef(null);
  const initialTime = 10; // Fixed initial time

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    } else if (onTimerEnd) {
      onTimerEnd();
    }
  }, [timer, onTimerEnd, setTimer]);

  // Draw the circular countdown ring and the timer number
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // High-DPI scaling
    const scale = window.devicePixelRatio || 1;
    const width = canvas.offsetWidth * scale;
    const height = canvas.offsetHeight * scale;
    canvas.width = width;
    canvas.height = height;
    ctx.setTransform(scale, 0, 0, scale, 0, 0);

    const centerX = canvas.offsetWidth / 2;
    const centerY = canvas.offsetHeight / 2;
    const radius = Math.min(centerX, centerY) * 0.85;
    const lineWidth = radius * 0.18;
    const timeRatio = timer / initialTime;

    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

    // Draw background ring
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = "#e0e0e0";
    ctx.stroke();

    // Color logic: green → yellow → red
    let color;
    if (timeRatio > 0.6) color = "#00CC00";
    else if (timeRatio > 0.3) color = "#FFCC00";
    else color = "#FF3333";

    // Draw the countdown arc (clockwise)
    if (timeRatio > 0) {
      const startAngle = -Math.PI / 2;
      const endAngle = startAngle + 2 * Math.PI * timeRatio;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, endAngle, false);
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = color;
      ctx.lineCap = "round";
      ctx.stroke();
    }

    // Draw timer text in the center (responsive font size)
    ctx.fillStyle = timer <= 3 ? "#ff3333" : "#333333";
    ctx.font = `bold ${Math.floor(radius * 0.5)}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(timer > 0 ? timer : "0", centerX, centerY);
  }, [timer, initialTime]);

  return (
    <div className="timer-container">
      <canvas ref={canvasRef} />
      {/* Timer text label below the canvas */}
      <div className="timer-content">
        <div
          className="timer-label"
          style={{
            fontSize: `${Math.max(12, Math.min(24, window.innerWidth * 0.008))}px`,
          }}
        >
          {timer > 0 ? "seconds" : "Time's up!"}
        </div>
      </div>
    </div>
  );
}

TimerDisplay.propTypes = {
  timer: PropTypes.number.isRequired,
  setTimer: PropTypes.func.isRequired,
  onTimerEnd: PropTypes.func.isRequired,
};
