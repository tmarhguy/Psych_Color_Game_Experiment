import React, { useState, useEffect, useRef, useCallback } from "react";
import "./assets/styles/main.css";
import { colorsAreSimilar } from "./utils/colorUtils";
import SenderScreen from "./screens/SenderScreen";
import ReceiverScreen from "./screens/ReceiverScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import ResultsScreen from "./screens/ResultsScreen";
import EnhancedWelcomeScreen from "./screens/EnhancedWelcomeScreen";
import DemographicsScreen from "./screens/DemographicsScreen";
import ColorVisionScreen from "./screens/ColorVisionScreen";
import AssociationScreen from "./screens/AssociationScreen";
import GameHeader from "./components/GameHeader/GameHeader";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import TwoPlayerPrototype from "./TwoPlayerPrototype";

// Animal images
import dog from "./assets/images/dog.jpg";
import butterfly from "./assets/images/butterfly.jpg";
import giraffe from "./assets/images/giraffe.png";
import deer from "./assets/images/deer.png";
import elephant from "./assets/images/elephant.jpg";

// Animal data
const ANIMALS = [
  { name: "Dog", image: dog, color: "#deb887" },
  { name: "Giraffe", image: giraffe, color: "#f4e285" },
  { name: "Butterfly", image: butterfly, color: "#ff69b4" },
  { name: "Deer", image: deer, color: "#a0522d" },
  { name: "Elephant", image: elephant, color: "#b0b0b0" },
];

const COLOR_TOLERANCE = 60;
const MAX_ROUNDS = 10;

export default function App() {
  // Add prototype mode toggle
  const [showPrototype, setShowPrototype] = useState(false);
  
  // Game state - enhanced for research protocol
  const [gameState, setGameState] = useState("enhanced-welcome"); 
  // States: enhanced-welcome, demographics, color-vision, associations, playing, results
  const [currentRound, setCurrentRound] = useState(1);
  const [roundHistory, setRoundHistory] = useState([]);
  const [participantId, setParticipantId] = useState("");
  const [roundStartTime, setRoundStartTime] = useState(null);
  
  // Research data
  const [demographicsData, setDemographicsData] = useState(null);
  const [colorVisionData, setColorVisionData] = useState(null);
  const [associationData, setAssociationData] = useState([]);
  const [strategyData, setStrategyData] = useState([]);
  
  // Existing state
  const [role, setRole] = useState("sender");
  const [senderColor, setSenderColor] = useState("#FFFFFF");
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10);
  const [refreshPositions, setRefreshPositions] = useState(0);
  const [selectedAnimalIndex, setSelectedAnimalIndex] = useState(0);
  const [targetAnimal, setTargetAnimal] = useState(null);
  const [difficulty, setDifficulty] = useState("normal"); // easy, normal, hard
  
  const timeoutRef = useRef(null);
  const roleRef = useRef(role);

  // Sync roleRef with current role
  useEffect(() => {
    roleRef.current = role;
  }, [role]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleTimerEnd = () => {
    const currentRole = roleRef.current;
    const newRole = currentRole === "sender" ? "receiver" : "sender";
    
    // If receiver's turn ended, record the round and check for game end
    if (currentRole === "receiver") {
      recordRoundResult(false, null); // No selection = incorrect
      
      if (currentRound >= MAX_ROUNDS) {
        setGameState("results");
        return;
      }
      
      // Move to next round
      setCurrentRound(prev => prev + 1);
      setTargetAnimal(ANIMALS[Math.floor(Math.random() * ANIMALS.length)]);
    }
    
    setRole(newRole);
    setTimer(getDifficultyTimer());
    setRefreshPositions((prev) => prev + 1);

    // Set round start time when sender begins
    if (newRole === "sender") {
      setSenderColor("#FFFFFF");
      setRoundStartTime(Date.now());
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }
  };

  const getDifficultyTimer = useCallback(() => {
    switch (difficulty) {
      case "easy": return 15;
      case "hard": return 5;
      default: return 10;
    }
  }, [difficulty]);

  const recordRoundResult = useCallback((correct, selectedAnimal, strategyInfo = null) => {
    const responseTime = roundStartTime ? Date.now() - roundStartTime : 0;
    const roundData = {
      round: currentRound,
      targetAnimal,
      selectedAnimal,
      senderColor,
      correct,
      responseTime,
      colorDistance: selectedAnimal ? 
        Math.abs(parseInt(senderColor.slice(1), 16) - parseInt(selectedAnimal.color.slice(1), 16)) : 
        null,
      strategy: strategyInfo
    };
    
    setRoundHistory(prev => [...prev, roundData]);
    
    // Store strategy data separately for analysis
    if (strategyInfo) {
      setStrategyData(prev => [...prev, { round: currentRound, ...strategyInfo }]);
    }
  }, [currentRound, targetAnimal, senderColor, roundStartTime]);

  const handleColorChange = useCallback((newColor, strategyInfo = null) => {
    // Clear existing timeout
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    setSenderColor(newColor);
    setRole("receiver");
    setTimer(getDifficultyTimer());
    
    // Store strategy data if provided
    if (strategyInfo) {
      setStrategyData(prev => [...prev, { round: currentRound, ...strategyInfo }]);
    }
    // Don't refresh positions here - only on timer end

    // Set new timeout to reset color
    timeoutRef.current = setTimeout(() => {
      setSenderColor("#FFFFFF");
    }, 2000);
  }, [getDifficultyTimer, currentRound]);

  const handleColorMatch = useCallback((animalColor, selectedAnimal, strategyInfo = null) => {
    // Clear existing timeout
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    const isCorrect = colorsAreSimilar(senderColor, animalColor, COLOR_TOLERANCE);
    
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    
    // Record the round result with research data
    recordRoundResult(isCorrect, selectedAnimal, strategyInfo);
    
    // Check if game is over
    if (currentRound >= MAX_ROUNDS) {
      setGameState("results");
      return;
    }
    
    // Move to next round
    setCurrentRound(prev => prev + 1);
    setTargetAnimal(ANIMALS[Math.floor(Math.random() * ANIMALS.length)]);
    setRole("sender");
    setTimer(getDifficultyTimer());
    setRoundStartTime(Date.now());

    // Set new timeout to reset color
    timeoutRef.current = setTimeout(() => {
      setSenderColor("#FFFFFF");
    }, 2000);
  }, [senderColor, currentRound, getDifficultyTimer, recordRoundResult]);

  const handleAnimalSelect = useCallback((animal) => {
    handleColorMatch(animal.color, animal);
  }, [handleColorMatch]);

  const handleKeyDown = useCallback((event) => {
    if (role !== "receiver") return;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      setSelectedAnimalIndex((prevIndex) => (prevIndex + 1) % ANIMALS.length);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      setSelectedAnimalIndex((prevIndex) =>
        (prevIndex - 1 + ANIMALS.length) % ANIMALS.length
      );
    } else if (event.key === "Enter") {
      handleColorMatch(ANIMALS[selectedAnimalIndex].color, ANIMALS[selectedAnimalIndex]);
    }
  }, [role, selectedAnimalIndex, handleColorMatch]);

  // Game control functions
  const startGame = useCallback((selectedDifficulty, participantName) => {
    setDifficulty(selectedDifficulty);
    setParticipantId(participantName);
    setGameState("playing");
    setCurrentRound(1);
    setScore(0);
    setRoundHistory([]);
    setTargetAnimal(ANIMALS[Math.floor(Math.random() * ANIMALS.length)]);
    setRole("sender");
    setTimer(getDifficultyTimer());
    setRoundStartTime(Date.now());
  }, [getDifficultyTimer]);

  // Research phase handlers
  const handleEnhancedWelcomeComplete = useCallback((participantName) => {
    setParticipantId(participantName);
    setGameState("demographics");
  }, []);

  const handleDemographicsComplete = useCallback((data) => {
    setDemographicsData(data);
    setGameState("color-vision");
  }, []);

  const handleColorVisionComplete = useCallback((data) => {
    setColorVisionData(data);
    setGameState("associations");
  }, []);

  const handleAssociationsComplete = useCallback((data) => {
    setAssociationData(data);
    setGameState("playing");
    setCurrentRound(1);
    setScore(0);
    setRoundHistory([]);
    setTargetAnimal(ANIMALS[Math.floor(Math.random() * ANIMALS.length)]);
    setRole("sender");
    setTimer(getDifficultyTimer());
    setRoundStartTime(Date.now());
  }, [getDifficultyTimer]);

  // Enhanced game handlers for research data collection
  const handleStrategySubmit = useCallback((strategyData) => {
    // Store strategy data and proceed with color change
    handleColorChange(senderColor, strategyData);
  }, [senderColor, handleColorChange]);

  const restartGame = useCallback(() => {
    setGameState("enhanced-welcome");
    setCurrentRound(1);
    setScore(0);
    setRoundHistory([]);
    setRole("sender");
    setSenderColor("#FFFFFF");
    setTimer(10);
    setTargetAnimal(null);
    setParticipantId("");
    
    // Reset research data
    setDemographicsData(null);
    setColorVisionData(null);
    setAssociationData([]);
    setStrategyData([]);
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  const exportResults = useCallback((data) => {
    // Compile comprehensive research data
    const completeData = {
      participantId,
      demographics: demographicsData,
      colorVision: colorVisionData,
      associations: associationData,
      gameResults: {
        score,
        totalRounds: MAX_ROUNDS,
        roundHistory,
        difficulty
      },
      strategies: strategyData,
      exportTime: new Date().toISOString(),
      ...data
    };
    
    // Export data for research purposes
    // In production, this would send to a research database
    if (process.env.NODE_ENV === 'development') {
      console.log("Exported comprehensive research results:", completeData);
    }
    // Additional export logic can be added here
    return completeData;
  }, [participantId, demographicsData, colorVisionData, associationData, score, roundHistory, difficulty, strategyData]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    // Add keyboard shortcut to toggle prototype (Shift + P)
    const handlePrototypeToggle = (e) => {
      if (e.shiftKey && e.key === 'P') {
        setShowPrototype(prev => !prev);
      }
    };
    window.addEventListener("keydown", handlePrototypeToggle);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keydown", handlePrototypeToggle);
    };
  }, [handleKeyDown]);

  // Show prototype if toggled
  if (showPrototype) {
    return (
      <div>
        <div style={{
          position: 'fixed', 
          top: 10, 
          left: 10, 
          zIndex: 9999, 
          background: 'rgba(0,0,0,0.8)', 
          color: 'white', 
          padding: '10px', 
          borderRadius: '5px',
          fontSize: '12px'
        }}>
          Two-Player Prototype Mode (Shift+P to toggle back)
        </div>
        <TwoPlayerPrototype />
      </div>
    );
  }

  // Enhanced Welcome Screen (Research Consent)
  if (gameState === "enhanced-welcome") {
    return (
      <EnhancedWelcomeScreen 
        onConsentComplete={handleEnhancedWelcomeComplete}
      />
    );
  }

  // Demographics Collection Screen
  if (gameState === "demographics") {
    return (
      <DemographicsScreen 
        participantId={participantId}
        onDemographicsComplete={handleDemographicsComplete}
      />
    );
  }

  // Color Vision Screening Screen
  if (gameState === "color-vision") {
    return (
      <ColorVisionScreen 
        onColorVisionComplete={handleColorVisionComplete}
      />
    );
  }

  // Association Learning Screen
  if (gameState === "associations") {
    return (
      <AssociationScreen 
        animals={ANIMALS}
        onAssociationComplete={handleAssociationsComplete}
      />
    );
  }

  // Original Welcome Screen (fallback for non-research mode)
  if (gameState === "welcome") {
    return (
      <WelcomeScreen 
        onStartGame={startGame}
        onDifficultyChange={setDifficulty}
      />
    );
  }

  // Results Screen
  if (gameState === "results") {
    return (
      <ResultsScreen
        score={score}
        totalRounds={MAX_ROUNDS}
        roundHistory={roundHistory}
        participantId={participantId}
        difficulty={difficulty}
        demographicsData={demographicsData}
        colorVisionData={colorVisionData}
        associationData={associationData}
        strategyData={strategyData}
        onRestart={restartGame}
        onExport={exportResults}
      />
    );
  }

  // Main Game
  return (
    <ErrorBoundary>
      <div className="app">
        <GameHeader
          currentRound={currentRound}
          totalRounds={MAX_ROUNDS}
          score={score}
          difficulty={difficulty}
          timer={timer}
          setTimer={setTimer}
          onTimerEnd={handleTimerEnd}
          role={role}
        />
        
        {role === "sender" ? (
          <SenderScreen
            animals={ANIMALS}
            targetAnimal={targetAnimal}
            onColorChange={handleColorChange}
            selectedColor={senderColor}
            onStrategySubmit={handleStrategySubmit}
            currentRound={currentRound}
            totalRounds={MAX_ROUNDS}
          />
        ) : (
          <ReceiverScreen
            animals={ANIMALS}
            senderColor={senderColor}
            onAnimalSelect={handleAnimalSelect}
            refreshPositions={refreshPositions}
            selectedAnimalIndex={selectedAnimalIndex}
            currentRound={currentRound}
            totalRounds={MAX_ROUNDS}
          />
        )}
      </div>
    </ErrorBoundary>
  );
}
