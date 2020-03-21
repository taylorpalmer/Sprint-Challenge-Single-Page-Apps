import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterListState, setCharacterListState] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/"
        )
        .then(response => {
          console.log(response);
          setCharacterListState(response.data);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getCharacters();
  }, []);

  return (
    <section className="character-list">
      <h2>
        {characterListState.map(character => (
          <Link to={`/characters/${character.id}`}>
            <CharacterCard key={character.id} character={character} />
          </Link>
        ))}
      </h2>
    </section>
  );
}
