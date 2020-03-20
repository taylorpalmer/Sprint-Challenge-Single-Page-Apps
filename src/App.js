import React from "react";
import Header from "./components/Header.js";
import SearchForm from "./components/SearchForm.js";
import WelcomePage from "./components/WelcomePage.js";

export default function App() {
  return (
    <main data-testid="app">
      <Header />
      <SearchForm />
      <WelcomePage />
    </main>
  );
}
