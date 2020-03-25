import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import CharacterCard from "./components/CharacterCard.js";

const App = props => {
  const [charListState, setCharListState] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/"
        )
        .then(function(response) {
          console.log(response.data.results);
          setCharListState(response.data.results);
        })
        .catch(function(error) {
          console.log("Server Error", error);
        });
    };
    getCharacters();
  }, []);
  console.log(props);

  return (
    <main data-testid="app">
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route
        path="/charlist"
        render={props => (
          <CharacterList {...props} charListState={charListState} />
        )}
      />
      <Route
        path="/characters/:id"
        render={props => (
          <CharacterCard {...props} charListState={charListState} />
        )}
      />
    </main>
  );
};

export default App;
