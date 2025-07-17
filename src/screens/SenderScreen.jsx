import React from "react";
import PropTypes from "prop-types";
import AnimalGrid from "../components/AnimalGrid/AnimalGrid";
import ColorPicker from "../components/ColorPicker/ColorPicker";
import ColorDisplay from "../components/ColorDisplay/ColorDisplay";
import ScoreBoard from "../components/ScoreBoard/ScoreBoard";

const SenderScreen = React.memo(({
  animals,
  refreshPositions,
  senderColor,
  score,
  onColorChange,
  timerDisplay,
}) => {
  return (
    <>
      <AnimalGrid animals={animals} refreshPositions={refreshPositions} role="sender" />
      <ColorPicker onColorChange={onColorChange} />
      <div className="color-display-container">
        <ColorDisplay color={senderColor} />
        {timerDisplay}
      </div>
      <ScoreBoard score={score} />
    </>
  );
});

SenderScreen.displayName = "SenderScreen";

SenderScreen.propTypes = {
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
  onColorChange: PropTypes.func.isRequired,
  timerDisplay: PropTypes.node.isRequired,
};

export default SenderScreen;