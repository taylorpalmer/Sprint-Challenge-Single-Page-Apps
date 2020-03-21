import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import SearchForm from "./components/SearchForm.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList";

export default function App() {
  return (
    <main data-testid="app">
      <Header />
      <SearchForm />
      <WelcomePage />
      <Route path="/characterList" component={CharacterList} />
    </main>
  );
}
