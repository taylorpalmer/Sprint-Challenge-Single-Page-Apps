import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList.js";
import CharacterCard from "./components/CharacterCard.js";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #65ff00;
`;

const App = props => {
  const [charListState, setCharListState] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const fetchChar = () => {
      const url = `https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data.results);
          setCharListState(data.results);
        })
        .catch(function(error) {
          console.log("Server Error", error);
        });
    };
    fetchChar();
  }, []);
  console.log(props);

  return (
    <Wrapper>
      <main data-testid="app">
        <Header />
        <Route exact path="/" component={WelcomePage} />
        <Route
          path="/charList"
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
    </Wrapper>
  );
};

export default App;
