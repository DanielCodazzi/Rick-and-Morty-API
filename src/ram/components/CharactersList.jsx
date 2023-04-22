import React, { useState, useEffect } from "react";
import { CharacterCard } from "./CharacterCard";

export const CharactersList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character"
      );
      const data = await response.json();
      setCharacters(data.results);
    };

    fetchCharacters();
  }, []);

  return (
    <ul>
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          id={character.id}
          image={character.image}
          name={character.name}
        />
      ))}
    </ul>
  );
};

