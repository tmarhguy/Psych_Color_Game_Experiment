import React, { useState } from "react";
import PropTypes from "prop-types";
import "./EnhancedWelcomeScreen.css";

const EnhancedWelcomeScreen = ({ onConsentComplete }) => {
  const [consents, setConsents] = useState({
    voluntary: false,
    dataCollection: false,
    ageConfirmation: false
  });

  const handleConsentChange = (consentType) => {
    setConsents(prev => ({
      ...prev,
      [consentType]: !prev[consentType]
    }));
  };

  const allConsentsGiven = Object.values(consents).every(consent => consent);

  const handleBeginStudy = () => {
    if (allConsentsGiven) {
      onConsentComplete({
        consents,
        timestamp: new Date().toISOString()
      });
    }
  };

  return (
    <div className="enhanced-welcome-screen">
      <div className="welcome-container">
        <header className="welcome-header">
          <h1>🎨 Color-Animal Communication Research</h1>
          <p className="subtitle">Understanding how colors communicate concepts across cultures</p>
        </header>
        
        <div className="study-overview">
          <h2>📋 Study Overview</h2>
          <div className="overview-cards">
            <div className="card">
              <h3>🎯 Purpose</h3>
              <p>Study how effectively colors can represent and communicate animal concepts between people</p>
            </div>
            <div className="card">
              <h3>⏱️ Duration</h3>
              <p>15-20 minutes total (3 phases)</p>
            </div>
            <div className="card">
              <h3>🔬 Your Contribution</h3>
              <p>Help us understand color-concept communication across cultures and individuals</p>
            </div>
          </div>
        </div>

        <div className="study-phases">
          <h2>🔄 Study Phases</h2>
          <div className="phases-timeline">
            <div className="phase-item">
              <div className="phase-number">1</div>
              <div className="phase-content">
                <h4>Setup & Assessment</h4>
                <p>Demographics collection, color vision screening, and instructions</p>
                <span className="phase-time">5-7 minutes</span>
              </div>
            </div>
            <div className="phase-item">
              <div className="phase-number">2</div>
              <div className="phase-content">
                <h4>Color-Animal Associations</h4>
                <p>Create your personal color associations for different animals</p>
                <span className="phase-time">5-7 minutes</span>
              </div>
            </div>
            <div className="phase-item">
              <div className="phase-number">3</div>
              <div className="phase-content">
                <h4>Communication Game</h4>
                <p>Test how well colors communicate animal concepts between people</p>
                <span className="phase-time">5-6 minutes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="research-info">
          <h2>🔬 Research Information</h2>
          <div className="research-details">
            <div className="detail-item">
              <h4>What we study:</h4>
              <ul>
                <li>Individual differences in color-animal associations</li>
                <li>Cultural patterns in color-concept communication</li>
                <li>Effectiveness of color as a communication medium</li>
                <li>Response patterns and decision-making strategies</li>
              </ul>
            </div>
            <div className="detail-item">
              <h4>Data we collect:</h4>
              <ul>
                <li>Color choices and confidence ratings</li>
                <li>Response times and communication accuracy</li>
                <li>Basic demographics (age, culture, language)</li>
                <li>Feedback and reasoning for choices</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="consent-section">
          <h2>📄 Informed Consent</h2>
          <div className="consent-text">
            <p>
              This research studies color perception and communication patterns. Your participation 
              is completely voluntary and you may withdraw at any time. All data will be collected 
              anonymously and used solely for research purposes.
            </p>
            
            <div className="consent-details">
              <h4>Your rights as a participant:</h4>
              <ul>
                <li>Participation is entirely voluntary</li>
                <li>You may withdraw at any time without penalty</li>
                <li>Your data will be anonymized and kept confidential</li>
                <li>Results may be published in aggregate form only</li>
                <li>No personally identifiable information is collected</li>
              </ul>
            </div>

            <div className="consent-points">
              <label className="consent-checkbox">
                <input 
                  type="checkbox" 
                  checked={consents.voluntary}
                  onChange={() => handleConsentChange('voluntary')}
                />
                <span className="checkmark"></span>
                I understand this is voluntary research and I may withdraw at any time
              </label>
              
              <label className="consent-checkbox">
                <input 
                  type="checkbox" 
                  checked={consents.dataCollection}
                  onChange={() => handleConsentChange('dataCollection')}
                />
                <span className="checkmark"></span>
                I consent to anonymous data collection for research purposes
              </label>
              
              <label className="consent-checkbox">
                <input 
                  type="checkbox" 
                  checked={consents.ageConfirmation}
                  onChange={() => handleConsentChange('ageConfirmation')}
                />
                <span className="checkmark"></span>
                I confirm that I am 18 years of age or older
              </label>
            </div>
          </div>
        </div>

        <div className="begin-section">
          <button 
            className={`begin-button ${allConsentsGiven ? 'enabled' : 'disabled'}`}
            disabled={!allConsentsGiven}
            onClick={handleBeginStudy}
          >
            Begin Study →
          </button>
          
          {!allConsentsGiven && (
            <p className="consent-reminder">
              Please review and accept all consent items above to continue
            </p>
          )}
        </div>

        <div className="ethics-footer">
          <p>
            This study follows ethical research guidelines. If you have questions about 
            your rights as a research participant, please contact the research team.
          </p>
        </div>
      </div>
    </div>
  );
};

EnhancedWelcomeScreen.propTypes = {
  onConsentComplete: PropTypes.func.isRequired,
};

export default EnhancedWelcomeScreen;
