import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = props => {
  console.log(props);

  const result = props.charListState.find(({ id }) => id === `${id}`);

  return (
    <div>
      <Link to="/">Home</Link>
      {/* <p>{props.character.name}</p>
      <img src={props.character.image} />
      <p>{props.character.species}</p> */}

      <h2>{result}</h2>
    </div>
  );
};

export default CharacterCard;
