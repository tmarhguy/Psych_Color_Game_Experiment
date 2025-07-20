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
  const handleAnimalSelection = (animal) => {
    onAnimalSelect(animal);
  };
  return (
    <div className="screen-container receiver-screen">
      <div className="role-indicator">
        <span className="role-icon">🔍</span>
        <span>Receiver Phase - Identify the Animal</span>
      </div>
      
      <div className="instruction-text">
        The sender chose this color to represent an animal. Which animal do you think they meant?
      </div>

      <div className="receiver-content">
        <div className="color-received">
          <h4>Sender's Color Choice:</h4>
          <div className="color-display-wrapper">
            <ColorDisplay color={senderColor} />
            <div className="color-info">
              <span className="color-hex">{senderColor}</span>
              <span className="color-hint">What animal does this represent?</span>
            </div>
          </div>
        </div>
        
        <div className="animal-selection">
          <h4>Select the Animal:</h4>
          <div className="selection-instruction">
            Click on the animal you think the sender was communicating
          </div>
          <AnimalGrid
            animals={animals}
            role="receiver"
            onAnimalSelect={handleAnimalSelection}
            refreshPositions={refreshPositions}
            selectedAnimalIndex={selectedAnimalIndex}
            senderColor={senderColor}
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