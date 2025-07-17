import React, { useState, useEffect, useRef, useCallback } from "react";
import "./assets/styles/main.css";
import { colorsAreSimilar } from "./utils/colorUtils";
import SenderScreen from "./screens/SenderScreen";
import ReceiverScreen from "./screens/ReceiverScreen";
import TimerDisplay from "./components/TimerDisplay/TimerDisplay";
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

export default function App() {
  const [role, setRole] = useState("sender");
  const [senderColor, setSenderColor] = useState("#FFFFFF");
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10);
  const [refreshPositions, setRefreshPositions] = useState(0);
  const [selectedAnimalIndex, setSelectedAnimalIndex] = useState(0);
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
    
    setRole(newRole);
    setTimer(10);
    setRefreshPositions((prev) => prev + 1);

    // Immediately reset color when switching to sender
    if (newRole === "sender") {
      setSenderColor("#FFFFFF");
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }
  };

  const handleColorChange = useCallback((newColor) => {
    // Clear existing timeout
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    setSenderColor(newColor);
    setRole("receiver");
    setTimer(10);
    // Don't refresh positions here - only on timer end

    // Set new timeout to reset color
    timeoutRef.current = setTimeout(() => {
      setSenderColor("#FFFFFF");
    }, 2000);
  }, []);

  const handleColorMatch = useCallback((animalColor) => {
    // Clear existing timeout
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    if (colorsAreSimilar(senderColor, animalColor, COLOR_TOLERANCE)) {
      setScore((prevScore) => prevScore + 1);
    }
    
    setRole("sender");
    setTimer(10);
    // Don't refresh positions here - only on timer end

    // Set new timeout to reset color
    timeoutRef.current = setTimeout(() => {
      setSenderColor("#FFFFFF");
    }, 2000);
  }, [senderColor]);

  const handleAnimalSelect = useCallback((animal) => {
    handleColorMatch(animal.color);
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
      handleColorMatch(ANIMALS[selectedAnimalIndex].color);
    }
  }, [role, selectedAnimalIndex, handleColorMatch]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <ErrorBoundary>
      <div className="app-root">
        <div className="unified-container">
          <div className="vertical-divider" />
          <div className="horizontal-divider-top" />
          <div className="horizontal-divider-bottom" />
          <div className="vertical-divider-2" />
          <div className="horizontal-divider-middle" />

          {role === "sender" ? (
            <SenderScreen
              animals={ANIMALS}
              refreshPositions={refreshPositions}
              timer={timer}
              senderColor={senderColor}
              score={score}
              onColorChange={handleColorChange}
              timerDisplay={
                <TimerDisplay
                  timer={timer}
                  setTimer={setTimer}
                  onTimerEnd={handleTimerEnd}
                />
              }
            />
          ) : (
            <ReceiverScreen
              animals={ANIMALS}
              refreshPositions={refreshPositions}
              timer={timer}
              senderColor={senderColor}
              score={score}
              selectedAnimalIndex={selectedAnimalIndex}
              onAnimalSelect={handleAnimalSelect}
              timerDisplay={
                <TimerDisplay
                  timer={timer}
                  setTimer={setTimer}
                  onTimerEnd={handleTimerEnd}
                />
              }
            />
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
}
