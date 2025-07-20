import React, { useState, useCallback, useEffect } from "react";
import "./assets/styles/main.css";
import "./assets/styles/prototype.css";

// Simplified animal data for prototype
const ANIMALS = [
  { id: 1, name: "Dog", emoji: "🐕", color: "#8B4513" },
  { id: 2, name: "Cat", emoji: "🐱", color: "#FFA500" },
  { id: 3, name: "Elephant", emoji: "🐘", color: "#808080" },
  { id: 4, name: "Bird", emoji: "🐦", color: "#87CEEB" },
  { id: 5, name: "Frog", emoji: "🐸", color: "#32CD32" },
];

const COLORS = [
  "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF",
  "#FFA500", "#800080", "#FFC0CB", "#A52A2A", "#808080", "#000000"
];

/**
 * PROTOTYPE: True Two-Player Communication Game
 * This demonstrates the actual game mechanics we need to implement
 */
export default function TwoPlayerPrototype() {
  // Simulate two players in one interface for demonstration
  const [gameState, setGameState] = useState("lobby"); // lobby, playing, results
  const [currentRound, setCurrentRound] = useState(1);
  const [maxRounds] = useState(5);
  const [sharedScore, setSharedScore] = useState(0);
  
  // Current round state
  const [currentSender, setCurrentSender] = useState("player1");
  const [targetAnimal, setTargetAnimal] = useState(null);
  const [senderColor, setSenderColor] = useState(null);
  const [receiverChoice, setReceiverChoice] = useState(null);
  const [roundResult, setRoundResult] = useState(null);
  
  // Player readiness
  const [player1Ready, setPlayer1Ready] = useState(false);
  const [player2Ready, setPlayer2Ready] = useState(false);
  
  const [roundHistory, setRoundHistory] = useState([]);

  // Start new round
  const startNewRound = useCallback(() => {
    const randomAnimal = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
    setTargetAnimal(randomAnimal);
    setSenderColor(null);
    setReceiverChoice(null);
    setRoundResult(null);
    setPlayer1Ready(false);
    setPlayer2Ready(false);
  }, []);

  // Handle sender color selection
  const handleSenderColorChoice = useCallback((color) => {
    setSenderColor(color);
    if (currentSender === "player1") {
      setPlayer1Ready(true);
    } else {
      setPlayer2Ready(true);
    }
  }, [currentSender]);

  // Handle receiver animal selection
  const handleReceiverAnimalChoice = useCallback((animal) => {
    setReceiverChoice(animal);
    
    // Check if communication was successful
    const success = animal.id === targetAnimal.id;
    setRoundResult(success);
    
    if (success) {
      setSharedScore(prev => prev + 1);
    }
    
    // Record round history
    const roundData = {
      round: currentRound,
      sender: currentSender,
      receiver: currentSender === "player1" ? "player2" : "player1",
      targetAnimal: targetAnimal,
      senderColor,
      receiverChoice: animal,
      success,
      timestamp: new Date()
    };
    
    setRoundHistory(prev => [...prev, roundData]);
    
    // Move to next round or end game
    setTimeout(() => {
      if (currentRound >= maxRounds) {
        setGameState("results");
      } else {
        setCurrentRound(prev => prev + 1);
        setCurrentSender(current => current === "player1" ? "player2" : "player1");
        startNewRound();
      }
    }, 3000);
  }, [targetAnimal, senderColor, currentRound, maxRounds, currentSender, startNewRound]);

  // Initialize game
  const startGame = useCallback(() => {
    setGameState("playing");
    setCurrentRound(1);
    setSharedScore(0);
    setCurrentSender("player1");
    setRoundHistory([]);
    startNewRound();
  }, [startNewRound]);

  // Reset game
  const resetGame = useCallback(() => {
    setGameState("lobby");
    setCurrentRound(1);
    setSharedScore(0);
    setRoundHistory([]);
  }, []);

  // Auto-start for demo
  useEffect(() => {
    if (gameState === "lobby") {
      setTimeout(() => startGame(), 1000);
    }
  }, [gameState, startGame]);

  if (gameState === "lobby") {
    return (
      <div className="prototype-container">
        <div className="lobby-screen">
          <h1>🎨 Two-Player Color Communication Game</h1>
          <p>True MVP Prototype - This shows the actual game mechanics we need</p>
          <button onClick={startGame} className="start-button">
            Start Game Demo
          </button>
        </div>
      </div>
    );
  }

  if (gameState === "results") {
    const successRate = Math.round((sharedScore / maxRounds) * 100);
    
    return (
      <div className="prototype-container">
        <div className="results-screen">
          <h1>🎯 Game Complete!</h1>
          <div className="final-stats">
            <div className="stat-card">
              <h3>Shared Score</h3>
              <div className="big-number">{sharedScore}/{maxRounds}</div>
            </div>
            <div className="stat-card">
              <h3>Communication Success</h3>
              <div className="big-number">{successRate}%</div>
            </div>
          </div>
          
          <div className="round-history">
            <h3>Round-by-Round Communication</h3>
            {roundHistory.map((round, index) => (
              <div key={index} className={`round-summary ${round.success ? 'success' : 'failure'}`}>
                <div className="round-info">
                  <strong>Round {round.round}</strong> - {round.sender} → {round.receiver}
                </div>
                <div className="communication-flow">
                  <span className="target">Target: {round.targetAnimal.emoji} {round.targetAnimal.name}</span>
                  <span className="arrow">→</span>
                  <div className="color-sent" style={{backgroundColor: round.senderColor}}></div>
                  <span className="arrow">→</span>
                  <span className="received">Received: {round.receiverChoice.emoji} {round.receiverChoice.name}</span>
                  <span className={`result ${round.success ? 'success' : 'failure'}`}>
                    {round.success ? '✅ Success!' : '❌ Missed'}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <button onClick={resetGame} className="restart-button">
            Play Again
          </button>
        </div>
      </div>
    );
  }

  const currentReceiver = currentSender === "player1" ? "player2" : "player1";
  const senderReady = (currentSender === "player1" && player1Ready) || 
                     (currentSender === "player2" && player2Ready);

  return (
    <div className="prototype-container">
      <div className="game-header">
        <div className="round-info">Round {currentRound}/{maxRounds}</div>
        <div className="shared-score">Shared Score: {sharedScore}</div>
        <div className="role-info">
          {currentSender} is Sender | {currentReceiver} is Receiver
        </div>
      </div>

      <div className="game-content">
        {/* Sender Side */}
        <div className="player-side sender-side">
          <h2>🎨 Sender: {currentSender}</h2>
          
          {targetAnimal && (
            <div className="target-animal">
              <h3>Communicate This Animal:</h3>
              <div className="animal-display">
                <div className="animal-emoji">{targetAnimal.emoji}</div>
                <div className="animal-name">{targetAnimal.name}</div>
              </div>
            </div>
          )}

          {!senderReady ? (
            <div className="color-picker-simple">
              <h4>Choose a color to represent this animal:</h4>
              <div className="color-grid">
                {COLORS.map((color, index) => (
                  <button
                    key={index}
                    className="color-button"
                    style={{backgroundColor: color}}
                    onClick={() => handleSenderColorChoice(color)}
                    title={color}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="sender-waiting">
              <div className="selected-color" style={{backgroundColor: senderColor}}></div>
              <p>Color sent! Waiting for receiver...</p>
            </div>
          )}
        </div>

        {/* Receiver Side */}
        <div className="player-side receiver-side">
          <h2>🔍 Receiver: {currentReceiver}</h2>
          
          {!senderReady ? (
            <div className="receiver-waiting">
              <p>Waiting for sender to choose a color...</p>
              <div className="loading-spinner">⏳</div>
            </div>
          ) : (
            <>
              <div className="received-color">
                <h3>Sender chose this color:</h3>
                <div className="color-display" style={{backgroundColor: senderColor}}></div>
                <p>Which animal does this represent?</p>
              </div>

              {!roundResult && (
                <div className="animal-choices">
                  <h4>Select the animal:</h4>
                  <div className="animal-grid">
                    {ANIMALS.map((animal) => (
                      <button
                        key={animal.id}
                        className="animal-button"
                        onClick={() => handleReceiverAnimalChoice(animal)}
                      >
                        <div className="animal-emoji">{animal.emoji}</div>
                        <div className="animal-name">{animal.name}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Round Result */}
      {roundResult !== null && (
        <div className="round-result">
          <div className={`result-banner ${roundResult ? 'success' : 'failure'}`}>
            {roundResult ? (
              <>
                <h2>🎉 Communication Successful!</h2>
                <p>Both players agreed on {targetAnimal.emoji} {targetAnimal.name}</p>
              </>
            ) : (
              <>
                <h2>💭 Communication Missed</h2>
                <p>Target was {targetAnimal.emoji} {targetAnimal.name}, but receiver chose {receiverChoice.emoji} {receiverChoice.name}</p>
              </>
            )}
            <p>Roles will swap for next round...</p>
          </div>
        </div>
      )}
    </div>
  );
}
