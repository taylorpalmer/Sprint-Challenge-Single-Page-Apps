import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import CharacterCard from "./components/CharacterCard.js";

const App = props => {
  console.log(props);
  return (
    <main data-testid="app">
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/charlist" component={CharacterList} />
      <Route
        path="/characters/:id"
        render={props => (
          <CharacterCard
            {...props}
            name={props.character.name}
            species={props.character.species}
            image={props.character.image}
          />
        )}
      />
    </main>
  );
};

export default App;
