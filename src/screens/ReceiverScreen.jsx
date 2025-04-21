import React from "react";
import AnimalGrid from "../components/AnimalGrid/AnimalGrid";
import ColorDisplay from "../components/ColorDisplay/ColorDisplay";
import ScoreBoard from "../components/ScoreBoard/ScoreBoard";
import "./ReceiverScreen.css"; // Import the CSS file
import TimerDisplay from "../components/TimerDisplay/TimerDisplay";

export default function ReceiverScreen({
  animals,
  refreshPositions,
  senderColor,
  score,
  onAnimalSelect,
  timerDisplay, // Pass the TimerDisplay component as a prop
}) {
  return (
    <div className="receiver-screen">
      {/* Rectangle */}
      <div className="rectangle"></div>

      <AnimalGrid
        animals={animals}
        refreshPositions={refreshPositions}
        role="receiver"
        onAnimalSelect={onAnimalSelect}
      />
      <div className="color-display-container">
        <ColorDisplay color={senderColor} />
        {timerDisplay} {/* Use the TimerDisplay component */}
      </div>
      <ScoreBoard score={score} />
    </div>
  );
}