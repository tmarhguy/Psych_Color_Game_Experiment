import React from "react";
import PropTypes from "prop-types";

export default function ScoreBoard({ score }) {
  return (
    <div className="score-text fancy-score">
      Score: <span className="score-number">{score}</span>
    </div>
  );
}

ScoreBoard.propTypes = {
  score: PropTypes.number.isRequired,
};
