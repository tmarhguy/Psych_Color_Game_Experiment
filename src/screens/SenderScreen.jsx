import React from "react";
import PropTypes from "prop-types";
import AnimalGrid from "../components/AnimalGrid/AnimalGrid";
import ColorPicker from "../components/ColorPicker/ColorPicker";
import ColorDisplay from "../components/ColorDisplay/ColorDisplay";
import "./SenderScreen.css";

const SenderScreen = React.memo(({
  animals,
  targetAnimal,
  onColorChange,
  selectedColor,
}) => {
  return (
    <div className="screen-container sender-screen">
      <div className="role-indicator">
        <span className="role-icon">🎨</span>
        <span>Sender - Choose a Color</span>
      </div>
      
      <div className="instruction-text">
        Your goal is to help the receiver identify the target animal by selecting a color that best represents it.
      </div>

      {targetAnimal && (
        <div className="target-animal-display">
          <h3>Target Animal to Communicate:</h3>
          <div className="target-animal-card">
            <img src={targetAnimal.image} alt={targetAnimal.name} />
            <div className="target-animal-name">{targetAnimal.name}</div>
          </div>
        </div>
      )}

      <div className="sender-content">
        <div className="color-selection-area">
          <h4>Choose Your Color:</h4>
          <ColorPicker onColorChange={onColorChange} selectedColor={selectedColor} />
        </div>
        
        <div className="color-preview">
          <h4>Selected Color:</h4>
          <ColorDisplay color={selectedColor} />
        </div>
      </div>
      
      <div className="animals-reference">
        <h4>Available Animals:</h4>
        <AnimalGrid 
          animals={animals} 
          role="sender" 
          isReference={true}
        />
      </div>
    </div>
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
  targetAnimal: PropTypes.object,
  onColorChange: PropTypes.func.isRequired,
  selectedColor: PropTypes.string.isRequired,
};

export default SenderScreen;