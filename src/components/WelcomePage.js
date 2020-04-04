import React, { useState } from "react";
import CharacterList from "./CharacterList";

export default function WelcomePage() {
  const [id, setId] = useState("");

  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
      <div>
        <CharacterList id={id} />
      </div>
    </section>
  );
}
