import React, { useState, useEffect } from "react";

export default function AnimalGrid({ animals, refreshPositions, onAnimalSelect, role }) {
  const [randomizedAnimals, setRandomizedAnimals] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0); // Track the currently selected animal

  // Helper function to check if two positions overlap
  const isOverlapping = (newAnimal, existingAnimals, buffer = 15) => {
    return existingAnimals.some((animal) => {
      const distanceX = Math.abs(newAnimal.left - animal.left);
      const distanceY = Math.abs(newAnimal.top - animal.top);
      return distanceX < buffer && distanceY < buffer; // Check if bounding boxes overlap
    });
  };

  // Function to randomize positions of animals without overlaps
  const randomizePositions = () => {
    const randomized = [];
    animals.forEach((animal) => {
      let newAnimal;
      let attempts = 0;
      do {
        newAnimal = {
          ...animal,
          top: Math.random() * 80 + 10, // Random top position (10% to 90%)
          left: Math.random() * 80 + 10, // Random left position (10% to 90%)
        };
        attempts++;
      } while (isOverlapping(newAnimal, randomized) && attempts < 100); // Retry if overlapping
      randomized.push(newAnimal);
    });
    setRandomizedAnimals(randomized);

    // Randomly select an animal for the sender
    if (role === "sender") {
      const randomIndex = Math.floor(Math.random() * randomized.length);
      setSelectedIndex(randomIndex);
      if (onAnimalSelect) onAnimalSelect(randomized[randomIndex]); // Notify parent of the selected animal
    }
  };

  // Handle keyboard navigation (only for receiver)
  const handleKeyDown = (event) => {
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
        if (onAnimalSelect) onAnimalSelect(randomizedAnimals[selectedIndex]); // Trigger callback for selected animal
        break;
      default:
        return;
    }
    setSelectedIndex(newIndex);
  };

  useEffect(() => {
    randomizePositions();
  }, [refreshPositions]);

  useEffect(() => {
    if (role === "receiver") {
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selectedIndex, randomizedAnimals, role]);

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