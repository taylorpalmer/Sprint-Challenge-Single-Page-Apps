import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import CharacterCard from "./CharacterCard";

const CharacterList = props => {
  // TODO: Add useState to track data from useEffect
  const [search, setSearch] = useState("");

  const filtered = props.charListState.filter(char =>
    char.name.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      <SearchForm onSubmit={searchTerm => setSearch(searchTerm)} />
      <div>
        {filtered.map(character => (
          <Link to={`/characters/${character.id}`} key={character.id}>
            <h2>{character.name}</h2>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CharacterList;
