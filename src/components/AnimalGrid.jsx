import React from "react";

export default function AnimalGrid({ animals }) {
  return (
    <div className="animal-grid-rectangle">
      {animals.map((animal, idx) => (
        <img
          key={animal.name}
          src={animal.image}
          alt={animal.name}
          className={`animal-image-${idx + 1}`}
        />
      ))}
    </div>
  );
}
