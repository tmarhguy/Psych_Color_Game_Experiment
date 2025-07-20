# Color Communication Game - Frontend UI/UX Specification

_Research-Grade Animal-Color Communication Study_

## COMPLETE USER JOURNEY FLOW

### PHASE 0: PRE-EXPERIMENT SETUP

_Purpose: Establish participant profile and research baselines_

#### **Screen 1: Welcome & Consent**

```jsx
const WelcomeScreen = () => (
  <div className="welcome-screen">
    <header>
      <h1>🎨 Color-Animal Communication Research</h1>
      <p className="subtitle">
        Understanding how colors communicate concepts across cultures
      </p>
    </header>

    <div className="study-overview">
      <h2>📋 Study Overview</h2>
      <div className="overview-cards">
        <div className="card">
          <h3>🎯 Purpose</h3>
          <p>
            Study how effectively colors can represent and communicate animal
            concepts between people
          </p>
        </div>
        <div className="card">
          <h3>⏱️ Duration</h3>
          <p>15-20 minutes total (3 phases)</p>
        </div>
        <div className="card">
          <h3>🔬 Your Contribution</h3>
          <p>
            Help us understand color-concept communication across cultures and
            individuals
          </p>
        </div>
      </div>
    </div>

    <div className="consent-section">
      <h3>📄 Informed Consent</h3>
      <div className="consent-text">
        <p>This research studies color perception and communication...</p>
        <div className="consent-points">
          <label>
            <input type="checkbox" /> I understand this is voluntary research
          </label>
          <label>
            <input type="checkbox" /> I consent to data collection for research
            purposes
          </label>
          <label>
            <input type="checkbox" /> I am 18+ years old
          </label>
        </div>
      </div>
    </div>

    <button
      className="primary-button"
      disabled={!allConsentGiven}
      onClick={proceedToDemographics}
    >
      Begin Study →
    </button>
  </div>
);
```

#### **Screen 2: Demographics Collection**

_Research Purpose: Control for cultural, age, and vision differences_

```jsx
const DemographicsScreen = () => (
  <div className="demographics-screen">
    <h2>👤 Participant Information</h2>
    <p className="info-text">This information helps us understand how different backgrounds affect color-animal associations</p>

    <form className="demographics-form">
      {/* Required Demographics */}
      <div className="form-section">
        <h3>Basic Information</h3>
        <div className="form-grid">
          <div className="field">
            <label>Age Range *</label>
            <select name="ageRange" required>
              <option value="">Select age range</option>
              <option value="18-24">18-24</option>
              <option value="25-34">25-34</option>
              <option value="35-44">35-44</option>
              <option value="45-54">45-54</option>
              <option value="55-64">55-64</option>
              <option value="65+">65+</option>
            </select>
          </div>

          <div className="field">
            <label>Gender Identity</label>
            <select name="gender">
              <option value="">Prefer not to say</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="non-binary">Non-binary</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </div>

      {/* Cultural Background */}
      <div className="form-section">
        <h3>Cultural Background</h3>
        <div className="form-grid">
          <div className="field">
            <label>Primary Language *</label>
            <input type="text" name="primaryLanguage" placeholder="e.g., English, Spanish, Mandarin" required />
          </div>

          <div className="field">
            <label>Country of Birth</label>
            <input type="text" name="birthCountry" placeholder="e.g., United States, Mexico, China" />
          </div>

          <div className="field">
            <label>Current Country of Residence *</label>
            <input type="text" name="currentCountry" required />
          </div>

          <div className="field">
            <label>Years in Current Country</label>
            <select name="yearsInCountry">
              <option value="">Select</option>
              <option value="0-2">0-2 years</option>
              <option value="3-10">3-10 years</option>
              <option value="11-20">11-20 years</option>
              <option value="21+">21+ years</option>
              <option value="birth">Since birth</option>
            </select>
          </div>
        </div>
      </div>

      {/* Technical Setup */}
      <div className="form-section">
        <h3>Display Setup</h3>
        <div className="form-grid">
          <div className="field">
            <label>Device Type *</label>
            <select name="deviceType" required>
              <option value="">Select device</option>
              <option value="desktop">Desktop Computer</option>
              <option value="laptop">Laptop</option>
              <option value="tablet">Tablet</option>
              <option value="phone">Smartphone</option>
            </select>
          </div>

          <div className="field">
            <label>Screen Size (approximate)</label>
            <select name="screenSize">
              <option value="">Select size</option>
              <option value="small">Small (< 15")</option>
              <option value="medium">Medium (15-24")</option>
              <option value="large">Large (25-32")</option>
              <option value="xlarge">Extra Large (> 32")</option>
            </select>
          </div>
        </div>

        <div className="lighting-check">
          <label>Viewing Environment</label>
          <div className="radio-group">
            <label><input type="radio" name="lighting" value="bright" /> Bright room</label>
            <label><input type="radio" name="lighting" value="normal" /> Normal lighting</label>
            <label><input type="radio" name="lighting" value="dim" /> Dim lighting</label>
          </div>
        </div>
      </div>
    </form>

    <button className="primary-button" onClick={proceedToColorVision}>
      Continue to Color Vision Test →
    </button>
  </div>
);
```

#### **Screen 3: Color Vision Screening**

_Research Purpose: Identify and accommodate color vision differences_

```jsx
const ColorVisionScreen = () => (
  <div className="color-vision-screen">
    <h2>👁️ Color Vision Assessment</h2>
    <p className="info-text">
      This brief test helps us understand your color perception and ensure the
      study works well for you
    </p>

    <div className="vision-test">
      <div className="test-instructions">
        <h3>Instructions</h3>
        <ul>
          <li>Look at each circle pattern below</li>
          <li>
            Enter the number you see (or "none" if you don't see a number)
          </li>
          <li>This is not a pass/fail test - all participants are welcome</li>
        </ul>
      </div>

      <div className="ishihara-plates">
        {ISHIHARA_PLATES.map((plate, index) => (
          <div key={index} className="plate-test">
            <div className="plate-image">
              <img src={plate.image} alt={`Color vision test ${index + 1}`} />
            </div>
            <div className="plate-input">
              <label>What number do you see?</label>
              <input
                type="text"
                placeholder="Enter number or 'none'"
                onChange={(e) => recordPlateResponse(index, e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="vision-assessment-result">
        <div className="result-card">
          <h4>Assessment Complete</h4>
          <p id="vision-result">
            Your color vision appears to be:{" "}
            <span className="result-text">Normal</span>
          </p>
          <p className="reassurance">
            All color vision types can participate in this study. We'll adjust
            the interface if needed.
          </p>
        </div>
      </div>
    </div>

    <button className="primary-button" onClick={proceedToInstructions}>
      Continue to Study Instructions →
    </button>
  </div>
);
```

### PHASE 1: ASSOCIATION LEARNING

_Research Purpose: Establish individual color-animal association baselines_

#### **Screen 4: Association Instructions**

```jsx
const AssociationInstructionsScreen = () => (
  <div className="association-instructions">
    <h2>🎨 Phase 1: Color-Animal Associations</h2>

    <div className="instructions-content">
      <div className="objective">
        <h3>🎯 Your Task</h3>
        <p>
          For each animal, choose the color that{" "}
          <strong>best represents</strong> that animal to you personally.
        </p>
      </div>

      <div className="example-demo">
        <h3>📝 Example</h3>
        <div className="demo-card">
          <img src="/images/lion.jpg" alt="Lion" className="demo-animal" />
          <p>
            If you see a <strong>Lion</strong>, you might choose:
          </p>
          <div className="color-options">
            <div
              className="color-choice"
              style={{ backgroundColor: "#DAA520" }}
            >
              Golden
            </div>
            <div
              className="color-choice"
              style={{ backgroundColor: "#D2691E" }}
            >
              Orange-brown
            </div>
            <div
              className="color-choice"
              style={{ backgroundColor: "#F4A460" }}
            >
              Sandy
            </div>
          </div>
          <p className="choice-note">
            Choose whatever feels right to you - there are no wrong answers!
          </p>
        </div>
      </div>

      <div className="instructions-list">
        <h3>📋 Instructions</h3>
        <ol>
          <li>Look at each animal image</li>
          <li>Think about what color best represents that animal</li>
          <li>Use the color picker to select your choice</li>
          <li>Rate how confident you are in your choice (1-7 scale)</li>
          <li>Optionally, explain your reasoning</li>
        </ol>
      </div>

      <div className="important-notes">
        <h4>⚠️ Important</h4>
        <ul>
          <li>Go with your first instinct</li>
          <li>There are no "correct" answers</li>
          <li>
            Consider the animal's typical appearance, habitat, or symbolic
            meaning
          </li>
          <li>This will take about 5-7 minutes</li>
        </ul>
      </div>
    </div>

    <button className="primary-button" onClick={startAssociationPhase}>
      Start Color Associations →
    </button>
  </div>
);
```

#### **Screen 5: Association Collection Interface**

_Research Purpose: Collect individual color-animal associations with confidence and reasoning_

```jsx
const AssociationCollectionScreen = ({
  animals,
  currentIndex,
  onAssociationComplete,
}) => {
  const currentAnimal = animals[currentIndex];

  return (
    <div className="association-collection">
      <div className="progress-header">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((currentIndex + 1) / animals.length) * 100}%` }}
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

          {selectedColor && (
            <div className="color-preview">
              <div
                className="chosen-color-display"
                style={{ backgroundColor: selectedColor }}
              />
              <span className="color-value">{selectedColor}</span>
            </div>
          )}
        </div>

        <div className="confidence-rating">
          <h4>How confident are you in this color choice?</h4>
          <div className="confidence-scale">
            {[1, 2, 3, 4, 5, 6, 7].map((rating) => (
              <label key={rating} className="confidence-option">
                <input
                  type="radio"
                  name="confidence"
                  value={rating}
                  onChange={(e) => setConfidence(e.target.value)}
                />
                <span className="rating-number">{rating}</span>
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
          />
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
          disabled={!selectedColor || !confidence}
          onClick={saveAssociationAndContinue}
        >
          {currentIndex < animals.length - 1
            ? "Next Animal →"
            : "Complete Associations →"}
        </button>
      </div>
    </div>
  );
};
```

### PHASE 2: COMMUNICATION GAME (ENHANCED)

_Research Purpose: Test color-concept communication effectiveness_

#### **Screen 6: Game Instructions**

```jsx
const GameInstructionsScreen = () => (
  <div className="game-instructions">
    <h2>🎮 Phase 2: Communication Game</h2>

    <div className="instructions-content">
      <div className="game-overview">
        <h3>🎯 How the Game Works</h3>
        <p>
          You'll alternate between being a <strong>Sender</strong> and a{" "}
          <strong>Receiver</strong> to test how well colors can communicate
          animal concepts.
        </p>
      </div>

      <div className="role-explanations">
        <div className="role-card sender-role">
          <h4>🎨 As Sender</h4>
          <ol>
            <li>You'll see a target animal</li>
            <li>Choose a color that represents that animal</li>
            <li>The receiver will see your color choice</li>
            <li>Goal: Help them identify the correct animal</li>
          </ol>
          <div className="role-tip">
            <strong>Tip:</strong> Consider what color would best help someone
            else identify this animal
          </div>
        </div>

        <div className="role-card receiver-role">
          <h4>🔍 As Receiver</h4>
          <ol>
            <li>You'll see a color chosen by the sender</li>
            <li>Look at all the animal options</li>
            <li>Select which animal you think they meant</li>
            <li>Goal: Correctly identify the sender's target animal</li>
          </ol>
          <div className="role-tip">
            <strong>Tip:</strong> Think about which animal this color most
            naturally represents
          </div>
        </div>
      </div>

      <div className="game-flow">
        <h3>🔄 Game Flow</h3>
        <div className="flow-steps">
          <div className="flow-step">
            <span className="step-number">1</span>
            <span className="step-text">Sender Phase (You choose colors)</span>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-step">
            <span className="step-number">2</span>
            <span className="step-text">
              Receiver Phase (You identify animals)
            </span>
          </div>
          <div className="flow-arrow">→</div>
          <div className="flow-step">
            <span className="step-number">3</span>
            <span className="step-text">Results & Analysis</span>
          </div>
        </div>
      </div>

      <div className="timing-info">
        <h4>⏱️ Timing</h4>
        <ul>
          <li>Each round has a time limit (adjustable: 5s/10s/15s)</li>
          <li>Total game time: ~10 minutes</li>
          <li>You'll see a visual timer during each phase</li>
        </ul>
      </div>
    </div>

    <div className="difficulty-selection">
      <h3>🎚️ Choose Difficulty</h3>
      <div className="difficulty-buttons">
        <button
          className={`difficulty-btn ${difficulty === "easy" ? "active" : ""}`}
          onClick={() => setDifficulty("easy")}
        >
          <span className="difficulty-icon">🟢</span>
          <span className="difficulty-name">Easy</span>
          <small>15 seconds per choice</small>
        </button>
        <button
          className={`difficulty-btn ${
            difficulty === "normal" ? "active" : ""
          }`}
          onClick={() => setDifficulty("normal")}
        >
          <span className="difficulty-icon">🟡</span>
          <span className="difficulty-name">Normal</span>
          <small>10 seconds per choice</small>
        </button>
        <button
          className={`difficulty-btn ${difficulty === "hard" ? "active" : ""}`}
          onClick={() => setDifficulty("hard")}
        >
          <span className="difficulty-icon">🔴</span>
          <span className="difficulty-name">Hard</span>
          <small>5 seconds per choice</small>
        </button>
      </div>
    </div>

    <button className="primary-button" onClick={startCommunicationGame}>
      Start Communication Game →
    </button>
  </div>
);
```

#### **Screen 7: Enhanced Sender Screen**

_Research Purpose: Collect intentional color choices for communication_

```jsx
const EnhancedSenderScreen = ({
  targetAnimal,
  animals,
  onColorChoice,
  gameState,
}) => (
  <div className="enhanced-sender-screen">
    <div className="game-header">
      <div className="role-indicator sender">
        <span className="role-icon">🎨</span>
        <span className="role-text">Sender Phase</span>
      </div>

      <div className="game-stats">
        <span>
          Round {gameState.currentRound}/{gameState.totalRounds}
        </span>
        <span>Score: {gameState.score}</span>
        <TimerDisplay timeRemaining={gameState.timeRemaining} />
      </div>
    </div>

    <div className="sender-instruction">
      <h3>🎯 Your Mission</h3>
      <p>Choose a color that will help the receiver identify this animal:</p>
    </div>

    <div className="target-animal-highlight">
      <div className="target-card">
        <img src={targetAnimal.image} alt={targetAnimal.name} />
        <h4 className="target-name">{targetAnimal.name}</h4>
      </div>
    </div>

    <div className="sender-content">
      <div className="color-selection-area">
        <h4 className="section-label">Choose Communication Color:</h4>
        <div className="color-picker-container-wrapper">
          <ColorPicker
            onColorChange={onColorChoice}
            selectedColor={gameState.selectedColor}
          />
        </div>
      </div>

      <div className="color-preview">
        <h4 className="section-label">Selected Color:</h4>
        <div className="color-display-container-wrapper">
          <ColorDisplay color={gameState.selectedColor} />
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
      <div className="strategy-modal">
        <div className="modal-content">
          <h3>💭 Quick Strategy Check</h3>
          <p>Why did you choose this color for {targetAnimal.name}?</p>
          <div className="strategy-options">
            <label>
              <input type="radio" name="strategy" value="appearance" /> Animal's
              natural appearance
            </label>
            <label>
              <input type="radio" name="strategy" value="habitat" /> Animal's
              habitat/environment
            </label>
            <label>
              <input type="radio" name="strategy" value="symbolic" />{" "}
              Symbolic/cultural association
            </label>
            <label>
              <input type="radio" name="strategy" value="personal" /> Personal
              association
            </label>
            <label>
              <input type="radio" name="strategy" value="other" /> Other reason
            </label>
          </div>
          <textarea
            placeholder="Optional: Explain your choice..."
            className="strategy-explanation"
          />
          <button onClick={submitStrategyAndContinue}>Continue →</button>
        </div>
      </div>
    )}
  </div>
);
```

#### **Screen 8: Enhanced Receiver Screen**

_Research Purpose: Test color-concept communication effectiveness_

```jsx
const EnhancedReceiverScreen = ({
  animals,
  senderColor,
  onAnimalSelect,
  gameState,
}) => (
  <div className="enhanced-receiver-screen">
    <div className="game-header">
      <div className="role-indicator receiver">
        <span className="role-icon">🔍</span>
        <span className="role-text">Receiver Phase</span>
      </div>

      <div className="game-stats">
        <span>
          Round {gameState.currentRound}/{gameState.totalRounds}
        </span>
        <span>Score: {gameState.score}</span>
        <TimerDisplay timeRemaining={gameState.timeRemaining} />
      </div>
    </div>

    <div className="receiver-instruction">
      <h3>🎯 Your Mission</h3>
      <p>
        The sender chose this color to represent an animal. Which animal do you
        think they meant?
      </p>
    </div>

    <div className="communication-display">
      <div className="sender-message">
        <h4>Sender's Color Choice:</h4>
        <div className="color-communication">
          <ColorDisplay color={senderColor} />
          <div className="color-info">
            <span className="color-hex">{senderColor}</span>
            <span className="color-hint">What animal does this represent?</span>
          </div>
        </div>
      </div>
    </div>

    <div className="animal-selection">
      <h4>Select the Animal:</h4>
      <AnimalGrid
        animals={animals}
        role="receiver"
        onAnimalSelect={onAnimalSelect}
        selectedAnimalIndex={gameState.selectedAnimalIndex}
        senderColor={senderColor}
      />
    </div>

    <div className="receiver-confidence">
      <h4>How confident are you in this choice?</h4>
      <div className="confidence-slider">
        <input
          type="range"
          min="1"
          max="7"
          value={confidence}
          onChange={(e) => setConfidence(e.target.value)}
          className="confidence-range"
        />
        <div className="confidence-labels">
          <span>Not confident</span>
          <span>Very confident</span>
        </div>
      </div>
    </div>

    {selectedAnimal && (
      <div className="selection-confirmation">
        <div className="selection-summary">
          <p>
            You selected: <strong>{selectedAnimal.name}</strong>
          </p>
          <p>
            Confidence: <strong>{confidence}/7</strong>
          </p>
        </div>
        <button
          className="primary-button"
          onClick={confirmSelectionAndContinue}
        >
          Confirm Selection →
        </button>
      </div>
    )}
  </div>
);
```

### PHASE 3: RESULTS & ANALYSIS

_Research Purpose: Collect reflection data and provide insights_

#### **Screen 9: Enhanced Results Screen**

_Research Purpose: Show performance and collect post-experiment reflections_

```jsx
const EnhancedResultsScreen = ({
  gameData,
  associationData,
  demographicData,
}) => (
  <div className="enhanced-results-screen">
    <div className="results-header">
      <h2>📊 Your Results & Research Contribution</h2>
      <p className="results-subtitle">
        Here's how you performed and what we learned
      </p>
    </div>

    <div className="performance-summary">
      <div className="performance-cards">
        <div className="performance-card primary">
          <div className="card-icon">🎯</div>
          <div className="card-content">
            <h3>Communication Success</h3>
            <div className="big-number">{gameData.accuracy}%</div>
            <p>
              {gameData.correctRounds}/{gameData.totalRounds} animals correctly
              identified
            </p>
          </div>
        </div>

        <div className="performance-card">
          <div className="card-icon">⚡</div>
          <div className="card-content">
            <h3>Average Response Time</h3>
            <div className="big-number">{gameData.avgResponseTime}s</div>
            <p>Speed of decision-making</p>
          </div>
        </div>

        <div className="performance-card">
          <div className="card-icon">🎨</div>
          <div className="card-content">
            <h3>Color Consistency</h3>
            <div className="big-number">{associationData.consistency}%</div>
            <p>How consistent your associations were</p>
          </div>
        </div>

        <div className="performance-card">
          <div className="card-icon">👥</div>
          <div className="card-content">
            <h3>Cultural Alignment</h3>
            <div className="big-number">
              {demographicData.culturalAlignment}%
            </div>
            <p>Similarity to your cultural group</p>
          </div>
        </div>
      </div>
    </div>

    <div className="detailed-analysis">
      <div className="analysis-tabs">
        <button
          className={`tab ${activeTab === "round-by-round" ? "active" : ""}`}
        >
          Round by Round
        </button>
        <button
          className={`tab ${activeTab === "associations" ? "active" : ""}`}
        >
          Your Associations
        </button>
        <button className={`tab ${activeTab === "insights" ? "active" : ""}`}>
          Research Insights
        </button>
      </div>

      {activeTab === "round-by-round" && (
        <div className="round-analysis">
          <h3>📈 Round-by-Round Performance</h3>
          <div className="rounds-list">
            {gameData.rounds.map((round, index) => (
              <div
                key={index}
                className={`round-item ${
                  round.correct ? "correct" : "incorrect"
                }`}
              >
                <div className="round-info">
                  <span className="round-number">Round {index + 1}</span>
                  <div className="round-details">
                    <span className="target">Target: {round.targetAnimal}</span>
                    <span className="selected">
                      Selected: {round.selectedAnimal}
                    </span>
                    <div
                      className="color-display-small"
                      style={{ backgroundColor: round.senderColor }}
                    ></div>
                  </div>
                </div>
                <div className="round-result">
                  <span className="result-icon">
                    {round.correct ? "✅" : "❌"}
                  </span>
                  <span className="response-time">{round.responseTime}s</span>
                  <span className="confidence">
                    Confidence: {round.confidence}/7
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "associations" && (
        <div className="associations-analysis">
          <h3>🎨 Your Color-Animal Associations</h3>
          <div className="associations-grid">
            {associationData.associations.map((assoc, index) => (
              <div key={index} className="association-item">
                <img
                  src={assoc.animal.image}
                  alt={assoc.animal.name}
                  className="animal-thumb"
                />
                <div className="association-details">
                  <h4>{assoc.animal.name}</h4>
                  <div className="color-choice">
                    <div
                      className="color-swatch"
                      style={{ backgroundColor: assoc.color }}
                    ></div>
                    <span className="color-value">{assoc.color}</span>
                  </div>
                  <div className="association-meta">
                    <span className="confidence">
                      Confidence: {assoc.confidence}/7
                    </span>
                    {assoc.reasoning && (
                      <p className="reasoning">"{assoc.reasoning}"</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "insights" && (
        <div className="research-insights">
          <h3>🧠 Research Insights</h3>

          <div className="insight-cards">
            <div className="insight-card">
              <h4>🎯 Communication Effectiveness</h4>
              <p>
                Your {gameData.accuracy}% success rate shows how well colors can
                communicate animal concepts. The average participant achieves
                65-75% accuracy.
              </p>
              <div className="insight-data">
                <div className="data-point">
                  <span className="label">Your Score:</span>
                  <span className="value">{gameData.accuracy}%</span>
                </div>
                <div className="data-point">
                  <span className="label">Study Average:</span>
                  <span className="value">70%</span>
                </div>
              </div>
            </div>

            <div className="insight-card">
              <h4>🌍 Cultural Patterns</h4>
              <p>
                Your associations align {demographicData.culturalAlignment}%
                with others from your cultural background, suggesting shared
                color-concept understanding.
              </p>
            </div>

            <div className="insight-card">
              <h4>🧩 Individual Differences</h4>
              <p>
                You showed {associationData.consistency}% consistency in your
                color choices, indicating{" "}
                {associationData.consistency > 80
                  ? "very stable"
                  : "somewhat variable"}{" "}
                personal associations.
              </p>
            </div>
          </div>

          <div className="research-contribution">
            <h4>🔬 Your Research Contribution</h4>
            <p>Your data helps us understand:</p>
            <ul>
              <li>How color-concept communication varies across cultures</li>
              <li>Individual differences in color-animal associations</li>
              <li>The effectiveness of color as a communication medium</li>
              <li>Factors that influence successful concept communication</li>
            </ul>
          </div>
        </div>
      )}
    </div>

    <div className="post-experiment-reflection">
      <h3>💭 Reflection Questions</h3>
      <div className="reflection-form">
        <div className="reflection-question">
          <label>
            How did your strategy change between being a sender vs. receiver?
          </label>
          <textarea
            placeholder="Describe any differences in how you approached the two roles..."
            className="reflection-textarea"
          />
        </div>

        <div className="reflection-question">
          <label>
            Were there any animals that were particularly easy or difficult to
            communicate with colors?
          </label>
          <textarea
            placeholder="Which animals worked well with colors and which didn't..."
            className="reflection-textarea"
          />
        </div>

        <div className="reflection-question">
          <label>
            Do you think cultural background influences color-animal
            associations?
          </label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="cultural-influence"
                value="strongly-agree"
              />{" "}
              Strongly agree
            </label>
            <label>
              <input type="radio" name="cultural-influence" value="agree" />{" "}
              Agree
            </label>
            <label>
              <input type="radio" name="cultural-influence" value="neutral" />{" "}
              Neutral
            </label>
            <label>
              <input type="radio" name="cultural-influence" value="disagree" />{" "}
              Disagree
            </label>
            <label>
              <input
                type="radio"
                name="cultural-influence"
                value="strongly-disagree"
              />{" "}
              Strongly disagree
            </label>
          </div>
        </div>

        <div className="reflection-question">
          <label>
            Any other thoughts about the study or color communication?
          </label>
          <textarea
            placeholder="Share any additional insights, suggestions, or observations..."
            className="reflection-textarea"
          />
        </div>
      </div>
    </div>

    <div className="completion-actions">
      <button className="secondary-button" onClick={exportDetailedData}>
        📁 Download My Data
      </button>

      <button className="secondary-button" onClick={restartStudy}>
        🔄 Try Again
      </button>

      <button className="primary-button" onClick={completeStudy}>
        ✅ Complete Study
      </button>
    </div>

    <div className="thank-you">
      <h3>🙏 Thank You!</h3>
      <p>
        Your participation contributes to our understanding of how colors
        communicate concepts across cultures and individuals. This research
        helps improve communication design, cross-cultural understanding, and
        cognitive science.
      </p>
    </div>
  </div>
);
```

## KEY DATA COLLECTION POINTS

### **Demographics Data**

```javascript
const DEMOGRAPHICS_DATA = {
  age: String,
  gender: String,
  primaryLanguage: String,
  birthCountry: String,
  currentCountry: String,
  yearsInCountry: String,
  deviceType: String,
  screenSize: String,
  lighting: String,
  colorVision: {
    responses: Array,
    assessment: String, // normal, deuteranopia, protanopia, etc.
  },
};
```

### **Association Phase Data**

```javascript
const ASSOCIATION_DATA = {
  participantId: String,
  associations: [
    {
      animal: Object,
      color: String, // hex value
      confidence: Number, // 1-7
      reasoning: String,
      responseTime: Number,
      timestamp: Date,
    },
  ],
  consistency: Number, // calculated metric
  culturalAlignment: Number, // vs. cultural group average
};
```

### **Communication Game Data**

```javascript
const GAME_DATA = {
  participantId: String,
  difficulty: String,
  rounds: [
    {
      roundNumber: Number,
      phase: String, // 'sender' or 'receiver'
      targetAnimal: Object,
      selectedColor: String, // sender phase
      selectedAnimal: Object, // receiver phase
      confidence: Number,
      strategy: String, // sender strategy
      responseTime: Number,
      correct: Boolean,
      timestamp: Date,
    },
  ],
  performance: {
    accuracy: Number,
    avgResponseTime: Number,
    consistency: Number,
  },
};
```

### **Post-Experiment Reflection Data**

```javascript
const REFLECTION_DATA = {
  strategyDifferences: String,
  easyDifficultAnimals: String,
  culturalInfluence: String,
  additionalThoughts: String,
  studyRating: Number,
  wouldRecommend: Boolean,
};
```

This comprehensive UI specification captures all the research requirements while maintaining excellent user experience. Each screen has clear research purposes and collects specific data points needed for analysis.
