import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import SearchForm from "./SearchForm";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const CharacterList = props => {
  // TODO: Add useState to track data from useEffect
  const [search, setSearch] = useState("");

  const filtered = props.charListState.filter(char =>
    char.name.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <section className="character-list">
      <StyledLink to="/">Home</StyledLink>
      <SearchForm onSubmit={searchTerm => setSearch(searchTerm)} />
      {filtered.map(character => (
        <StyledLink to={`/characters/${character.id}`} key={character.id}>
          <h2>{character.name}</h2>
        </StyledLink>
      ))}
    </section>
  );
};

export default CharacterList;
