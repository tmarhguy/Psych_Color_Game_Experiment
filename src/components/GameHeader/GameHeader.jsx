import React, { useState } from "react";
import PropTypes from "prop-types";
import TimerDisplay from "../TimerDisplay/TimerDisplay";
import "./GameHeader.css";

export default function GameHeader({
  currentRound,
  totalRounds,
  score,
  difficulty,
  timer,
  setTimer,
  onTimerEnd,
  role
}) {
  const [isPaused, setIsPaused] = useState(false);

  const getDifficultyLabel = (diff) => {
    switch (diff) {
      case "easy": return "Easy";
      case "normal": return "Normal";
      case "hard": return "Hard";
      default: return "Normal";
    }
  };

  const getRoleLabel = (currentRole) => {
    return currentRole === "sender" ? "Sender" : "Receiver";
  };

  const handlePauseToggle = () => {
    setIsPaused(!isPaused);
    // TODO: Implement actual pause logic for the game
    console.log(`Game ${isPaused ? 'resumed' : 'paused'}`);
  };

  return (
    <div className="game-header">
      <div className="header-content">
        {/* Left Section - All Game Information */}
        <div className="header-section info-section">
          <div className="stat-card round-card">
            <div className="stat-content">
              <div className="stat-label">Round</div>
              <div className="stat-value">{currentRound} / {totalRounds}</div>
            </div>
          </div>
          
          <div className="stat-card score-card">
            <div className="stat-content">
              <div className="stat-label">Score</div>
              <div className="stat-value">{score}</div>
            </div>
          </div>

          <div className="stat-card difficulty-card">
            <div className="stat-content">
              <div className="stat-label">Difficulty</div>
              <div className="stat-value">{getDifficultyLabel(difficulty)}</div>
            </div>
          </div>
          
          <div className="stat-card role-card">
            <div className="stat-content">
              <div className="stat-label">Role</div>
              <div className="stat-value">{getRoleLabel(role)}</div>
            </div>
          </div>

          {/* Pause Button - Testing Only */}
          <div className="pause-control">
            <button 
              className={`pause-button ${isPaused ? 'paused' : ''}`}
              onClick={handlePauseToggle}
              title={isPaused ? 'Resume Game' : 'Pause Game'}
            >
              {isPaused ? '▶' : '⏸'}
            </button>
            <span className="pause-label">{isPaused ? 'Paused' : 'Running'}</span>
          </div>
        </div>

        {/* Right Section - Timer */}
        <div className="header-section timer-section">
          <TimerDisplay 
            timer={timer} 
            setTimer={setTimer} 
            onTimerEnd={onTimerEnd} 
            isPaused={isPaused}
          />
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="round-progress-bar">
        <div 
          className="round-progress-fill"
          style={{
            width: `${(currentRound / totalRounds) * 100}%`
          }}
        />
      </div>
    </div>
  );
}

GameHeader.propTypes = {
  currentRound: PropTypes.number.isRequired,
  totalRounds: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  difficulty: PropTypes.string.isRequired,
  timer: PropTypes.number.isRequired,
  setTimer: PropTypes.func.isRequired,
  onTimerEnd: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired,
};
