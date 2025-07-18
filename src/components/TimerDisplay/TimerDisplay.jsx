import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./TimerDisplay.css";

export default function TimerDisplay({ timer, setTimer, onTimerEnd, isPaused = false }) {
  const [animationClass, setAnimationClass] = useState("");
  const initialTime = 10;

  // Timer countdown logic
  useEffect(() => {
    if (timer > 0 && !isPaused) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => {
          const newTimer = prevTimer - 1;
          
          // Add animation classes based on time remaining
          if (newTimer === 3) setAnimationClass("warning");
          if (newTimer === 1) setAnimationClass("critical");
          if (newTimer === 0) setAnimationClass("expired");
          
          return newTimer;
        });
      }, 1000);
      
      return () => clearInterval(interval);
    } else if (timer === 0 && onTimerEnd) {
      onTimerEnd();
    }
  }, [timer, setTimer, onTimerEnd, isPaused]);

  // Calculate progress as percentage
  const progressPercentage = (timer / initialTime) * 100;
  
  // Calculate stroke dash offset for circular progress
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercentage / 100) * circumference;

  // Get theme colors based on time remaining
  const getTimerTheme = () => {
    if (timer === 0) {
      return {
        color: "#dc2626", // red-600
        bgColor: "#fef2f2", // red-50
        textColor: "#dc2626",
        progressColor: "#dc2626"
      };
    } else if (timer <= 3) {
      return {
        color: "#ea580c", // orange-600
        bgColor: "#fff7ed", // orange-50
        textColor: "#ea580c",
        progressColor: "#ea580c"
      };
    } else if (timer <= 6) {
      return {
        color: "#d97706", // amber-600
        bgColor: "#fffbeb", // amber-50
        textColor: "#d97706",
        progressColor: "#d97706"
      };
    } else {
      return {
        color: "#059669", // emerald-600
        bgColor: "#ecfdf5", // emerald-50
        textColor: "#059669",
        progressColor: "#059669"
      };
    }
  };

  const theme = getTimerTheme();

  return (
    <div className={`new-timer ${animationClass} ${isPaused ? 'paused' : ''}`}>
      {/* Circular Progress Ring */}
      <div className="timer-ring" style={{ backgroundColor: theme.bgColor }}>
        <svg className="timer-svg" width="100" height="100" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="6"
            className="timer-track"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={theme.progressColor}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="timer-progress-new"
            transform="rotate(-90 50 50)"
            style={{
              transition: timer === initialTime ? 'none' : 'stroke-dashoffset 0.8s ease-in-out',
            }}
          />
        </svg>
        
        {/* Timer Display Content */}
        <div className="timer-content-new">
          <div className="timer-number-new" style={{ color: theme.textColor }}>
            {timer}
          </div>
          <div className="timer-unit" style={{ color: theme.textColor }}>
            {timer === 1 ? 'sec' : 'secs'}
          </div>
        </div>
      </div>
      
      {/* Status Message */}
      <div className="timer-message" style={{ color: theme.textColor }}>
        {isPaused ? 'Paused' : timer > 0 ? 'Time remaining' : 'Time\'s up!'}
      </div>
    </div>
  );
}

TimerDisplay.propTypes = {
  timer: PropTypes.number.isRequired,
  setTimer: PropTypes.func.isRequired,
  onTimerEnd: PropTypes.func.isRequired,
  isPaused: PropTypes.bool,
};
