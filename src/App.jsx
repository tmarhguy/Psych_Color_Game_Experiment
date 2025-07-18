import React, { useState, useEffect, useRef, useCallback } from "react";
import "./assets/styles/main.css";
import { colorsAreSimilar } from "./utils/colorUtils";
import SenderScreen from "./screens/SenderScreen";
import ReceiverScreen from "./screens/ReceiverScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import ResultsScreen from "./screens/ResultsScreen";
import GameHeader from "./components/GameHeader/GameHeader";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

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
  // Game state
  const [gameState, setGameState] = useState("welcome"); // welcome, playing, results
  const [currentRound, setCurrentRound] = useState(1);
  const [roundHistory, setRoundHistory] = useState([]);
  const [participantId, setParticipantId] = useState("");
  const [roundStartTime, setRoundStartTime] = useState(null);
  
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

  const recordRoundResult = useCallback((correct, selectedAnimal) => {
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
        null
    };
    
    setRoundHistory(prev => [...prev, roundData]);
  }, [currentRound, targetAnimal, senderColor, roundStartTime]);

  const handleColorChange = useCallback((newColor) => {
    // Clear existing timeout
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    setSenderColor(newColor);
    setRole("receiver");
    setTimer(getDifficultyTimer());
    // Don't refresh positions here - only on timer end

    // Set new timeout to reset color
    timeoutRef.current = setTimeout(() => {
      setSenderColor("#FFFFFF");
    }, 2000);
  }, [getDifficultyTimer]);

  const handleColorMatch = useCallback((animalColor, selectedAnimal) => {
    // Clear existing timeout
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    const isCorrect = colorsAreSimilar(senderColor, animalColor, COLOR_TOLERANCE);
    
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    
    // Record the round result
    recordRoundResult(isCorrect, selectedAnimal);
    
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

  const restartGame = useCallback(() => {
    setGameState("welcome");
    setCurrentRound(1);
    setScore(0);
    setRoundHistory([]);
    setRole("sender");
    setSenderColor("#FFFFFF");
    setTimer(10);
    setTargetAnimal(null);
    setParticipantId("");
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  const exportResults = useCallback((data) => {
    // Export data for research purposes
    // In production, this would send to a research database
    if (process.env.NODE_ENV === 'development') {
      console.log("Exported results:", data);
    }
    // Additional export logic can be added here
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Welcome Screen
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
          />
        ) : (
          <ReceiverScreen
            animals={ANIMALS}
            senderColor={senderColor}
            onAnimalSelect={handleAnimalSelect}
            refreshPositions={refreshPositions}
            selectedAnimalIndex={selectedAnimalIndex}
          />
        )}
      </div>
    </ErrorBoundary>
  );
}
