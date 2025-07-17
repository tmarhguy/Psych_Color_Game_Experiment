import React from "react";
import PropTypes from "prop-types";
import AnimalGrid from "../components/AnimalGrid/AnimalGrid";
import ColorDisplay from "../components/ColorDisplay/ColorDisplay";
import ScoreBoard from "../components/ScoreBoard/ScoreBoard";
import "./ReceiverScreen.css";

const ReceiverScreen = React.memo(({
  animals,
  refreshPositions,
  senderColor,
  score,
  onAnimalSelect,
  timerDisplay,
}) => {
  return (
    <div className="receiver-screen">
      <div className="rectangle" />
      <AnimalGrid
        animals={animals}
        refreshPositions={refreshPositions}
        role="receiver"
        onAnimalSelect={onAnimalSelect}
      />
      <div className="color-display-container">
        <ColorDisplay color={senderColor} />
        {timerDisplay}
      </div>
      <ScoreBoard score={score} />
    </div>
  );
});

ReceiverScreen.displayName = "ReceiverScreen";

ReceiverScreen.propTypes = {
  animals: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  refreshPositions: PropTypes.number.isRequired,
  senderColor: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  onAnimalSelect: PropTypes.func.isRequired,
  timerDisplay: PropTypes.node.isRequired,
};

export default ReceiverScreen;