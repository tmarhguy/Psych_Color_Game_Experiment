import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ColorVisionScreen.css";

// Mock Ishihara plate data - in production, you'd use actual test images
const ISHIHARA_PLATES = [
  { id: 1, image: "placeholder1.jpg", correctAnswer: "12", description: "Control plate - should see 12" },
  { id: 2, image: "placeholder2.jpg", correctAnswer: "8", description: "Protanopia test - number 8" },
  { id: 3, image: "placeholder3.jpg", correctAnswer: "6", description: "Deuteranopia test - number 6" },
  { id: 4, image: "placeholder4.jpg", correctAnswer: "29", description: "General color vision - number 29" },
];

const ColorVisionScreen = ({ onColorVisionComplete }) => {
  const [responses, setResponses] = useState({});
  const [currentPlate, setCurrentPlate] = useState(0);
  const [testComplete, setTestComplete] = useState(false);
  const [assessment, setAssessment] = useState("");

  const handlePlateResponse = (plateId, response) => {
    const newResponses = {
      ...responses,
      [plateId]: response.toLowerCase().trim()
    };
    setResponses(newResponses);
  };

  const handleNextPlate = () => {
    if (currentPlate < ISHIHARA_PLATES.length - 1) {
      setCurrentPlate(currentPlate + 1);
    } else {
      completeTest();
    }
  };

  const handlePreviousPlate = () => {
    if (currentPlate > 0) {
      setCurrentPlate(currentPlate - 1);
    }
  };

  const completeTest = () => {
    // Assess color vision based on responses
    const assessment = assessColorVision(responses);
    setAssessment(assessment);
    setTestComplete(true);
  };

  const assessColorVision = (responses) => {
    // Simple assessment logic - in production, use validated algorithms
    const correctResponses = Object.entries(responses).filter(([plateId, response]) => {
      const plate = ISHIHARA_PLATES.find(p => p.id === parseInt(plateId));
      return plate && response === plate.correctAnswer.toLowerCase();
    }).length;

    const totalPlates = ISHIHARA_PLATES.length;
    const accuracy = correctResponses / totalPlates;

    if (accuracy >= 0.75) {
      return "Normal color vision";
    } else if (accuracy >= 0.5) {
      return "Possible color vision difference";
    } else {
      return "Significant color vision difference detected";
    }
  };

  const handleContinue = () => {
    onColorVisionComplete({
      responses,
      assessment,
      timestamp: new Date().toISOString(),
      accuracy: Object.keys(responses).length / ISHIHARA_PLATES.length
    });
  };

  if (testComplete) {
    return (
      <div className="color-vision-screen">
        <div className="color-vision-container">
          <div className="vision-assessment-result">
            <div className="result-card">
              <h2>👁️ Color Vision Assessment Complete</h2>
              <div className="assessment-result">
                <h3>Your Assessment:</h3>
                <p className="result-text">{assessment}</p>
                <div className="reassurance">
                  <p>
                    <strong>Important:</strong> All color vision types can participate in this study. 
                    We'll adjust the interface if needed to ensure the best experience for you.
                  </p>
                </div>
              </div>
              
              <div className="response-summary">
                <h4>Your Responses:</h4>
                <div className="responses-grid">
                  {ISHIHARA_PLATES.map((plate, index) => (
                    <div key={plate.id} className="response-item">
                      <span className="plate-number">Plate {index + 1}:</span>
                      <span className="user-response">
                        {responses[plate.id] || "No response"}
                      </span>
                      <span className="expected-response">
                        (Expected: {plate.correctAnswer})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="continue-section">
            <button className="primary-button" onClick={handleContinue}>
              Continue to Study Instructions →
            </button>
          </div>
        </div>
      </div>
    );
  }

  const plate = ISHIHARA_PLATES[currentPlate];

  return (
    <div className="color-vision-screen">
      <div className="color-vision-container">
        <header className="color-vision-header">
          <h2>👁️ Color Vision Assessment</h2>
          <p className="info-text">
            This brief test helps us understand your color perception and ensure the study works well for you
          </p>
        </header>

        <div className="test-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${((currentPlate + 1) / ISHIHARA_PLATES.length) * 100}%` }}
            />
          </div>
          <span className="progress-text">
            Plate {currentPlate + 1} of {ISHIHARA_PLATES.length}
          </span>
        </div>

        <div className="vision-test">
          <div className="test-instructions">
            <h3>Instructions</h3>
            <ul>
              <li>Look at the circle pattern below</li>
              <li>Enter the number you see (or "none" if you don't see a number)</li>
              <li>This is not a pass/fail test - all participants are welcome</li>
              <li>Take your time and look carefully</li>
            </ul>
          </div>

          <div className="current-plate-test">
            <div className="plate-container">
              <div className="plate-image-placeholder">
                {/* In production, replace with actual Ishihara plate images */}
                <div className="placeholder-plate">
                  <div className="placeholder-text">
                    <p>Ishihara Plate {currentPlate + 1}</p>
                    <p className="hint">({plate.description})</p>
                  </div>
                </div>
              </div>
              
              <div className="plate-input">
                <label htmlFor={`plate-${plate.id}`}>What number do you see?</label>
                <input
                  id={`plate-${plate.id}`}
                  type="text"
                  placeholder="Enter number or 'none'"
                  value={responses[plate.id] || ""}
                  onChange={(e) => handlePlateResponse(plate.id, e.target.value)}
                  className="number-input"
                  autoFocus
                />
              </div>
            </div>
          </div>

          <div className="navigation-buttons">
            {currentPlate > 0 && (
              <button 
                className="secondary-button" 
                onClick={handlePreviousPlate}
              >
                ← Previous Plate
              </button>
            )}
            
            <button 
              className="primary-button"
              onClick={handleNextPlate}
              disabled={!responses[plate.id]}
            >
              {currentPlate < ISHIHARA_PLATES.length - 1 ? 'Next Plate →' : 'Complete Test →'}
            </button>
          </div>
        </div>

        <div className="test-note">
          <p>
            <strong>Note:</strong> This is a simplified color vision screening. 
            For complete assessment, consult an eye care professional.
          </p>
        </div>
      </div>
    </div>
  );
};

ColorVisionScreen.propTypes = {
  onColorVisionComplete: PropTypes.func.isRequired,
};

export default ColorVisionScreen;
