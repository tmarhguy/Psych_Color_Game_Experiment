import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

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

  // Effect to randomize positions - only when refreshPositions changes
  useEffect(() => {
    const randomized = [];
    
    // Helper function to check if two positions overlap
    const checkOverlap = (newAnimal, existingAnimals, buffer = 15) => {
      return existingAnimals.some((animal) => {
        const distanceX = Math.abs(newAnimal.left - animal.left);
        const distanceY = Math.abs(newAnimal.top - animal.top);
        return distanceX < buffer && distanceY < buffer;
      });
    };
    
    animals.forEach((animal) => {
      let newAnimal;
      let attempts = 0;
      do {
        newAnimal = {
          ...animal,
          top: Math.random() * 80 + 10,
          left: Math.random() * 80 + 10,
        };
        attempts++;
      } while (checkOverlap(newAnimal, randomized) && attempts < 100);
      randomized.push(newAnimal);
    });
    setRandomizedAnimals(randomized);
  }, [refreshPositions, animals]); // Only refreshPositions and animals

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
        <img
          key={animal.name}
          src={animal.image}
          alt={animal.name}
          className={`animal-image-${idx + 1}`}
          style={{
            position: "absolute",
            top: `${animal.top}%`,
            left: `${animal.left}%`,
            transform: "translate(-50%, -50%)",
            border: idx === selectedIndex ? "3px solid black" : "none", // Highlight the selected animal
            cursor: "pointer",
          }}
        />
      ))}
    </div>
  );
}