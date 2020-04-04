import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

export default function WelcomePage() {
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
        <Link to="/charList">Character List</Link>
      </div>
    </section>
  );
}
