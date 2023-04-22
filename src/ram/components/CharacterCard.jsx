import React from "react";

export const CharacterCard = ({ id, image, name }) => {
  return (
    <li key={id}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </li>
  );
};
