import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState("");

  useEffect(({ id }) => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const fetchChar = id =>
      fetch(`https://rick-api.herokuapp.com/api/${id}`).then(char => {
        console.log(char);
        setChar(char);
      });
    fetchChar(id);

    return <div>{char}</div>;
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      <Route
        path="/charList"
        render={props => {
          return <CharacterList />;
        }}
      />
    </section>
  );
}
