import React, { useState } from "react";
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
  onStrategySubmit,
  gameState,
}) => {
  const [showStrategyModal, setShowStrategyModal] = useState(false);
  const [strategy, setStrategy] = useState("");
  const [strategyExplanation, setStrategyExplanation] = useState("");

  const handleColorChangeWithStrategy = (color) => {
    onColorChange(color);
    // Show strategy modal after color selection
    if (color !== "#FFFFFF") {
      setShowStrategyModal(true);
    }
  };

  const submitStrategyAndContinue = () => {
    onStrategySubmit?.({
      strategy,
      explanation: strategyExplanation.trim(),
      timestamp: new Date().toISOString()
    });
    setShowStrategyModal(false);
    setStrategy("");
    setStrategyExplanation("");
  };
  return (
    <div className="screen-container sender-screen">
      <div className="role-indicator">
        <span className="role-icon">🎨</span>
        <span>Sender Phase - Choose a Color</span>
      </div>
      
      <div className="instruction-text">
        Your mission: Choose a color that will help the receiver identify the target animal.
        Think about what color would best communicate this animal to another person.
      </div>

      {targetAnimal && (
        <div className="target-animal-display">
          <h3>🎯 Target Animal to Communicate:</h3>
          <div className="target-animal-card">
            <img src={targetAnimal.image} alt={targetAnimal.name} />
            <div className="target-animal-name">{targetAnimal.name}</div>
          </div>
        </div>
      )}

      <div className="sender-content">
        <div className="color-selection-area">
          <h4 className="section-label">Choose Communication Color:</h4>
          <div className="color-picker-container-wrapper">
            <ColorPicker 
              onColorChange={handleColorChangeWithStrategy} 
              selectedColor={selectedColor} 
            />
          </div>
        </div>
        
        <div className="color-preview">
          <h4 className="section-label">Selected Color:</h4>
          <div className="color-display-container-wrapper">
            <ColorDisplay color={selectedColor} />
          </div>
        </div>
      </div>
      
      <div className="animals-reference">
        <h4>All Available Animals:</h4>
        <AnimalGrid 
          animals={animals} 
          role="sender" 
          targetAnimal={targetAnimal}
          isReference={true}
        />
      </div>

      {/* Strategy Collection Modal */}
      {showStrategyModal && (
        <div className="strategy-modal-overlay">
          <div className="strategy-modal">
            <div className="modal-content">
              <h3>💭 Quick Strategy Question</h3>
              <p>Why did you choose this color for <strong>{targetAnimal?.name}</strong>?</p>
              
              <div className="strategy-options">
                <label className="strategy-option">
                  <input 
                    type="radio" 
                    name="strategy" 
                    value="appearance"
                    checked={strategy === "appearance"}
                    onChange={(e) => setStrategy(e.target.value)}
                  />
                  <span>Animal's natural appearance</span>
                </label>
                
                <label className="strategy-option">
                  <input 
                    type="radio" 
                    name="strategy" 
                    value="habitat"
                    checked={strategy === "habitat"}
                    onChange={(e) => setStrategy(e.target.value)}
                  />
                  <span>Animal's habitat/environment</span>
                </label>
                
                <label className="strategy-option">
                  <input 
                    type="radio" 
                    name="strategy" 
                    value="symbolic"
                    checked={strategy === "symbolic"}
                    onChange={(e) => setStrategy(e.target.value)}
                  />
                  <span>Symbolic/cultural association</span>
                </label>
                
                <label className="strategy-option">
                  <input 
                    type="radio" 
                    name="strategy" 
                    value="personal"
                    checked={strategy === "personal"}
                    onChange={(e) => setStrategy(e.target.value)}
                  />
                  <span>Personal association</span>
                </label>
                
                <label className="strategy-option">
                  <input 
                    type="radio" 
                    name="strategy" 
                    value="other"
                    checked={strategy === "other"}
                    onChange={(e) => setStrategy(e.target.value)}
                  />
                  <span>Other reason</span>
                </label>
              </div>
              
              <div className="strategy-explanation">
                <textarea 
                  placeholder="Optional: Explain your choice in more detail..."
                  value={strategyExplanation}
                  onChange={(e) => setStrategyExplanation(e.target.value)}
                  className="strategy-textarea"
                  maxLength={200}
                />
                <div className="char-count">{strategyExplanation.length}/200</div>
              </div>
              
              <div className="modal-actions">
                <button 
                  className="skip-button"
                  onClick={() => setShowStrategyModal(false)}
                >
                  Skip
                </button>
                <button 
                  className="continue-button"
                  onClick={submitStrategyAndContinue}
                  disabled={!strategy}
                >
                  Continue →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
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
  onStrategySubmit: PropTypes.func,
  gameState: PropTypes.object,
};

export default SenderScreen;