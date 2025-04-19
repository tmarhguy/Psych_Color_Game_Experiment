import React from "react";

export default function ScoreBoard({ score }) {
  return (
    <div className="score-text fancy-score">
      Score: <span className="score-number">{score}</span>
    </div>
  );
}
