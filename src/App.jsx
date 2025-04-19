import React, { useState } from "react";
import "./assets/styles/main.css";
import AnimalGrid from "./components/AnimalGrid";
import ColorPicker from "./components/ColorPicker";
import ColorDisplay from "./components/ColorDisplay";
import ScoreBoard from "./components/ScoreBoard";
import { colorDistance } from "./utils/colorUtils";

// Animal images
import dog from "./assets/images/dog.jpg";
import butterfly from "./assets/images/butterfly.jpg";
import giraffe from "./assets/images/giraffe.png";
import deer from "./assets/images/deer.png";
import elephant from "./assets/images/elephant.jpg";

// Animal data with names, images, and associated colors
const ANIMALS = [
  { name: "Dog", image: dog, color: "#deb887" },
  { name: "Giraffe", image: giraffe, color: "#f4e285" },
  { name: "Butterfly", image: butterfly, color: "#ff69b4" },
  { name: "Deer", image: deer, color: "#a0522d" },
  { name: "Elephant", image: elephant, color: "#b0b0b0" },
];

// Tolerance for color matching
const COLOR_TOLERANCE = 60;

export default function App() {
  const [selectedColor, setSelectedColor] = useState("#FFFFFF"); // Default selected color
  const [previousColor, setPreviousColor] = useState("#FFFFFF"); // Default previous color
  const [score, setScore] = useState(0); // Initial score

  // Function to handle color matching and scoring
  const handleColorMatch = (animalColor) => {
    const distance = colorDistance(selectedColor, animalColor);
    if (distance <= COLOR_TOLERANCE) {
      setScore((prevScore) => prevScore + 1); // Increment score if within tolerance
    }
  };

  // Function to handle color change
  const handleColorChange = (newColor) => {
    setPreviousColor(selectedColor); // Update previous color
    setSelectedColor(newColor); // Update selected color
    
    // Reset colors to white after 2 seconds
    setTimeout(() => {
      setPreviousColor("#FFFFFF");
      setSelectedColor("#FFFFFF");
    }, 1700);
  };

  return (
    <div className="app-root">
      {/* Animal grid to display animals */}
      <AnimalGrid animals={ANIMALS} onAnimalClick={handleColorMatch} />

      {/* Color picker to select a color */}
      <ColorPicker selectedColor={selectedColor} onColorChange={handleColorChange} />

      {/* Container for two color displays */}
      <div className="color-display-container">
        {/* First color display */}
        <ColorDisplay color={selectedColor} />

        {/* Second color display */}
        <ColorDisplay color={previousColor} />
      </div>

      {/* Scoreboard to display the current score */}
      <ScoreBoard score={score} />
    </div>
  );
}