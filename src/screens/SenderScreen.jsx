import React from "react";
import AnimalGrid from "../components/AnimalGrid/AnimalGrid";
import ColorPicker from "../components/ColorPicker/ColorPicker";
import ColorDisplay from "../components/ColorDisplay/ColorDisplay";
import ScoreBoard from "../components/ScoreBoard/ScoreBoard";
import TimerDisplay from "../components/TimerDisplay/TimerDisplay";

export default function SenderScreen({
  animals,
  refreshPositions,
  senderColor,
  score,
  onColorChange,
  timerDisplay, // Pass the TimerDisplay component as a prop
}) {
  return (
    <>
      <AnimalGrid animals={animals} refreshPositions={refreshPositions} role="sender" />
      <ColorPicker onColorChange={onColorChange} />
      <div className="color-display-container">
        <ColorDisplay color={senderColor} />
        {timerDisplay} {/* Use the TimerDisplay component */}
      </div>
      <ScoreBoard score={score} />
    </>
  );
}