import React, { useState } from "react";
import PropTypes from "prop-types";
import "./WelcomeScreen.css";

const WelcomeScreen = ({ onStartGame, onDifficultyChange }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState("normal");
  const [participantId, setParticipantId] = useState("");

  const handleDifficultyChange = (difficulty) => {
    setSelectedDifficulty(difficulty);
    onDifficultyChange(difficulty);
  };

  const handleStartGame = () => {
    if (participantId.trim()) {
      onStartGame(selectedDifficulty, participantId.trim());
    } else {
      alert("Please enter a participant ID to continue.");
    }
  };

  return (
    <div className="welcome-screen">
      <div className="welcome-container">
        <header className="welcome-header">
          <h1>🎨 Color Communication Lab</h1>
          <p className="subtitle">Psychology Research Experiment</p>
        </header>

        <div className="experiment-info">
          <h2>📋 Experiment Overview</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3>🎯 Objective</h3>
              <p>Study how effectively colors can communicate specific concepts between people.</p>
            </div>
            <div className="info-card">
              <h3>⏱️ Duration</h3>
              <p>Approximately 5-8 minutes (10 rounds)</p>
            </div>
            <div className="info-card">
              <h3>🧠 Method</h3>
              <p>Take turns being a "sender" (choosing colors) and "receiver" (matching colors to animals).</p>
            </div>
          </div>
        </div>

        <div className="game-instructions">
          <h2>🎮 How to Play</h2>
          <div className="instructions-steps">
            <div className="step">
              <span className="step-number">1</span>
              <div className="step-content">
                <h4>Sender Phase</h4>
                <p>Look at the animals and pick a color that best represents the highlighted animal.</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <div className="step-content">
                <h4>Receiver Phase</h4>
                <p>See the chosen color and select which animal you think it represents using arrow keys + Enter.</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <div className="step-content">
                <h4>Scoring</h4>
                <p>Points awarded for successful color-animal matches. Aim for clear communication!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="difficulty-selection">
          <h3>🎚️ Difficulty Level</h3>
          <div className="difficulty-buttons">
            {["easy", "normal", "hard"].map((diff) => (
              <button
                key={diff}
                className={`difficulty-btn ${selectedDifficulty === diff ? "active" : ""}`}
                onClick={() => handleDifficultyChange(diff)}
              >
                <span className="difficulty-icon">
                  {diff === "easy" && "🟢"}
                  {diff === "normal" && "🟡"}
                  {diff === "hard" && "🔴"}
                </span>
                {diff.charAt(0).toUpperCase() + diff.slice(1)}
                <small>
                  {diff === "easy" && "Longer time, closer colors"}
                  {diff === "normal" && "Standard settings"}
                  {diff === "hard" && "Shorter time, precise colors"}
                </small>
              </button>
            ))}
          </div>
        </div>

        <div className="participant-setup">
          <div className="input-group">
            <label htmlFor="participant-id">
              👤 Participant ID (optional)
            </label>
            <input
              id="participant-id"
              type="text"
              value={participantId}
              onChange={(e) => setParticipantId(e.target.value)}
              placeholder="Enter your ID or leave blank"
              className="participant-input"
            />
          </div>
        </div>

        <div className="start-section">
          <button 
            className="start-button"
            onClick={handleStartGame}
          >
            🚀 Begin Experiment
          </button>
          <p className="ethics-note">
            This is a research study. Your participation is voluntary and data will be used for research purposes only.
          </p>
        </div>
      </div>
    </div>
  );
};

WelcomeScreen.propTypes = {
  onStartGame: PropTypes.func.isRequired,
  onDifficultyChange: PropTypes.func.isRequired,
};

export default WelcomeScreen;
