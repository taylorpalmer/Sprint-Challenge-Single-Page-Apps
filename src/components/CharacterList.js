import React, { useState } from "react";
import { Route } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState("");

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      <SearchForm onSubmit={searchTerm => setSearch(searchTerm)} />
      <div></div>
    </section>
  );
}
