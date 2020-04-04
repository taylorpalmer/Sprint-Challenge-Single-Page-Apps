import React, { useEffect, useState } from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";

export default function App = props => {
  const [charListState, setCharListState] = useState([]);

  return (
    <main data-testid="app">
      <Header />
      <WelcomePage />
    </main>
  );
}
