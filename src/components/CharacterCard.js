import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = props => {
  console.log(props.match.params);

  const findChar = charId => charId === props.match.params;

  const chosenChar = props.charListState.find(findChar);

  return (
    <div>
      <Link to="/">Home</Link>
      {/* <p>{props.character.name}</p>
      <img src={props.character.image} />
      <p>{props.character.species}</p> */}

      <h2>{chosenChar}</h2>
    </div>
  );
};

export default CharacterCard;
