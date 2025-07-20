import React, { useState } from "react";
import PropTypes from "prop-types";
import ColorPicker from "../components/ColorPicker/ColorPicker";
import "./AssociationScreen.css";

const AssociationScreen = ({ animals, onAssociationComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [associations, setAssociations] = useState([]);
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");
  const [confidence, setConfidence] = useState("");
  const [reasoning, setReasoning] = useState("");

  const currentAnimal = animals[currentIndex];

  const handleColorChoice = (color) => {
    setSelectedColor(color);
  };

  const saveAssociationAndContinue = () => {
    const association = {
      animal: currentAnimal,
      color: selectedColor,
      confidence: parseInt(confidence),
      reasoning: reasoning.trim(),
      timestamp: new Date().toISOString(),
      responseTime: Date.now() - pageLoadTime
    };

    const newAssociations = [...associations, association];
    setAssociations(newAssociations);

    if (currentIndex < animals.length - 1) {
      // Move to next animal
      setCurrentIndex(currentIndex + 1);
      setSelectedColor("#FFFFFF");
      setConfidence("");
      setReasoning("");
    } else {
      // Complete association phase
      onAssociationComplete(newAssociations);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      // Load previous association data
      const prevAssociation = associations[currentIndex - 1];
      if (prevAssociation) {
        setSelectedColor(prevAssociation.color);
        setConfidence(prevAssociation.confidence.toString());
        setReasoning(prevAssociation.reasoning);
      }
    }
  };

  // Track page load time for response time calculation
  const [pageLoadTime] = useState(Date.now());

  return (
    <div className="association-screen">
      <div className="association-container">
        <div className="progress-header">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{width: `${((currentIndex + 1) / animals.length) * 100}%`}}
            />
          </div>
          <span className="progress-text">
            Animal {currentIndex + 1} of {animals.length}: {currentAnimal.name}
          </span>
        </div>

        <div className="association-content">
          <div className="animal-display">
            <div className="animal-card">
              <img 
                src={currentAnimal.image} 
                alt={currentAnimal.name}
                className="animal-image"
              />
              <h3 className="animal-name">{currentAnimal.name}</h3>
            </div>
          </div>

          <div className="color-selection">
            <h4>What color best represents this {currentAnimal.name}?</h4>
            <div className="color-picker-wrapper">
              <ColorPicker 
                onColorChange={handleColorChoice}
                selectedColor={selectedColor}
              />
            </div>
            
            {selectedColor && selectedColor !== "#FFFFFF" && (
              <div className="color-preview">
                <div 
                  className="chosen-color-display"
                  style={{backgroundColor: selectedColor}}
                />
                <span className="color-value">{selectedColor}</span>
              </div>
            )}
          </div>

          <div className="confidence-rating">
            <h4>How confident are you in this color choice?</h4>
            <div className="confidence-scale">
              {[1,2,3,4,5,6,7].map(rating => (
                <label key={rating} className="confidence-option">
                  <input 
                    type="radio" 
                    name="confidence" 
                    value={rating}
                    checked={confidence === rating.toString()}
                    onChange={(e) => setConfidence(e.target.value)}
                  />
                  <span className="rating-button">
                    <span className="rating-number">{rating}</span>
                  </span>
                  <span className="rating-label">
                    {rating === 1 && "Not confident"}
                    {rating === 4 && "Somewhat confident"}
                    {rating === 7 && "Very confident"}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="reasoning-input">
            <h4>Why did you choose this color? (Optional)</h4>
            <textarea 
              placeholder="e.g., 'Lions have golden fur' or 'Elephants remind me of gray rocks'"
              value={reasoning}
              onChange={(e) => setReasoning(e.target.value)}
              className="reasoning-textarea"
              maxLength={500}
            />
            <div className="char-count">
              {reasoning.length}/500 characters
            </div>
          </div>
        </div>

        <div className="navigation-buttons">
          {currentIndex > 0 && (
            <button className="secondary-button" onClick={goToPrevious}>
              ← Previous Animal
            </button>
          )}
          
          <button 
            className="primary-button"
            disabled={!selectedColor || selectedColor === "#FFFFFF" || !confidence}
            onClick={saveAssociationAndContinue}
          >
            {currentIndex < animals.length - 1 ? 'Next Animal →' : 'Complete Associations →'}
          </button>
        </div>

        <div className="association-tips">
          <h5>💡 Tips for choosing colors:</h5>
          <ul>
            <li>Consider the animal's natural appearance</li>
            <li>Think about their habitat or environment</li>
            <li>Trust your first instinct</li>
            <li>There are no wrong answers - be authentic to your perception</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

AssociationScreen.propTypes = {
  animals: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
  onAssociationComplete: PropTypes.func.isRequired,
};

export default AssociationScreen;
