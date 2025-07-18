import React from "react";
import PropTypes from "prop-types";
import AnimalGrid from "../components/AnimalGrid/AnimalGrid";
import ColorDisplay from "../components/ColorDisplay/ColorDisplay";
import "./ReceiverScreen.css";

const ReceiverScreen = React.memo(({
  animals,
  senderColor,
  onAnimalSelect,
  refreshPositions,
  selectedAnimalIndex,
}) => {
  return (
    <div className="screen-container receiver-screen">
      <div className="role-indicator">
        <span className="role-icon">🔍</span>
        <span>Receiver - Identify the Animal</span>
      </div>
      
      <div className="instruction-text">
        Based on the color chosen by the sender, select the animal you think they were trying to communicate.
      </div>

      <div className="receiver-content">
        <div className="color-received">
          <h4>Sender's Color Choice:</h4>
          <div className="color-display-wrapper">
            <ColorDisplay color={senderColor} />
            <div className="color-hint">
              What animal does this color make you think of?
            </div>
          </div>
        </div>
        
        <div className="animal-selection">
          <h4>Choose an Animal:</h4>
          <div className="selection-instruction">
            Click on the animal you think matches the color
          </div>
          <AnimalGrid
            animals={animals}
            role="receiver"
            onAnimalSelect={onAnimalSelect}
            refreshPositions={refreshPositions}
            selectedAnimalIndex={selectedAnimalIndex}
          />
        </div>
      </div>
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
  senderColor: PropTypes.string.isRequired,
  onAnimalSelect: PropTypes.func.isRequired,
  refreshPositions: PropTypes.number.isRequired,
  selectedAnimalIndex: PropTypes.number.isRequired,
};

export default ReceiverScreen;