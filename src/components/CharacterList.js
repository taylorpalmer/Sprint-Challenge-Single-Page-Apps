import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

const CharacterList = props => {
  const [search, setSearch] = useState("");

  const filtered = props.charListState.filter(char =>
    char.name.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <section className="character-list">
      <Link to="/">Home</Link>
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
