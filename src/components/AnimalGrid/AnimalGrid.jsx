import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import "./AnimalGrid.css";

export default function AnimalGrid({ animals, refreshPositions, onAnimalSelect, role }) {
  const [randomizedAnimals, setRandomizedAnimals] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Helper function to check if two positions overlap
  const isOverlapping = useCallback((newAnimal, existingAnimals, buffer = 15) => {
    return existingAnimals.some((animal) => {
      const distanceX = Math.abs(newAnimal.left - animal.left);
      const distanceY = Math.abs(newAnimal.top - animal.top);
      return distanceX < buffer && distanceY < buffer;
    });
  }, []);

  // Handle keyboard navigation (only for receiver)
  const handleKeyDown = useCallback((event) => {
    if (role !== "receiver" || randomizedAnimals.length === 0) return;

    let newIndex = selectedIndex;
    switch (event.key) {
      case "ArrowUp":
      case "ArrowLeft":
        newIndex = (selectedIndex - 1 + randomizedAnimals.length) % randomizedAnimals.length;
        break;
      case "ArrowDown":
      case "ArrowRight":
        newIndex = (selectedIndex + 1) % randomizedAnimals.length;
        break;
      case "Enter":
        if (onAnimalSelect) onAnimalSelect(randomizedAnimals[selectedIndex]);
        break;
      default:
        return;
    }
    setSelectedIndex(newIndex);
  }, [role, randomizedAnimals, selectedIndex, onAnimalSelect]);

  // Effect to arrange animals in a refined grid pattern
  useEffect(() => {
    const arranged = [];
    const animalCount = animals.length;
    
    // Create a grid layout based on number of animals
    const cols = Math.ceil(Math.sqrt(animalCount));
    const rows = Math.ceil(animalCount / cols);
    
    // Calculate spacing to ensure even distribution
    const horizontalSpacing = 80 / (cols + 1);
    const verticalSpacing = 80 / (rows + 1);
    
    // Shuffle animals for randomness while maintaining grid structure
    const shuffledAnimals = [...animals].sort(() => Math.random() - 0.5);
    
    shuffledAnimals.forEach((animal, index) => {
      const row = Math.floor(index / cols);
      const col = index % cols;
      
      // Add slight random offset within grid cell for natural look
      const randomOffsetX = (Math.random() - 0.5) * 8;
      const randomOffsetY = (Math.random() - 0.5) * 8;
      
      const newAnimal = {
        ...animal,
        top: (row + 1) * verticalSpacing + 10 + randomOffsetY,
        left: (col + 1) * horizontalSpacing + 10 + randomOffsetX,
      };
      
      arranged.push(newAnimal);
    });
    
    setRandomizedAnimals(arranged);
  }, [refreshPositions, animals]);

  // Separate effect to handle animal selection for sender
  useEffect(() => {
    if (role === "sender" && randomizedAnimals.length > 0) {
      const randomIndex = Math.floor(Math.random() * randomizedAnimals.length);
      setSelectedIndex(randomIndex);
      if (onAnimalSelect) onAnimalSelect(randomizedAnimals[randomIndex]);
    }
  }, [role, randomizedAnimals, onAnimalSelect]); // This runs when role changes, but doesn't affect positioning

  useEffect(() => {
    if (role === "receiver") {
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [role, handleKeyDown]);

  return (
    <div className="animal-grid-rectangle">
      {randomizedAnimals.map((animal, idx) => (
        <div
          key={animal.name}
          className="animal-container"
          style={{
            position: "absolute",
            top: `${animal.top}%`,
            left: `${animal.left}%`,
            transform: "translate(-50%, -50%)",
          }}
          onClick={() => onAnimalSelect && onAnimalSelect(animal)}
          title={animal.name}
        >
          <img
            src={animal.image}
            alt={animal.name}
            className={`animal-image ${idx === selectedIndex ? 'selected' : ''}`}
            style={{
              border: idx === selectedIndex ? "4px solid #667eea" : "3px solid #ffffff",
              boxShadow: idx === selectedIndex 
                ? "0 0 0 2px rgba(102, 126, 234, 0.3), 0 8px 24px rgba(0, 0, 0, 0.2)" 
                : undefined,
            }}
          />
          <div className="animal-name-tooltip">{animal.name}</div>
        </div>
      ))}
    </div>
  );
}

AnimalGrid.propTypes = {
  animals: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  refreshPositions: PropTypes.number.isRequired,
  onAnimalSelect: PropTypes.func,
  role: PropTypes.oneOf(["sender", "receiver"]).isRequired,
};