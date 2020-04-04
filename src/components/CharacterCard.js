import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = props => {
  console.log(props.charListState);

  const findChar = char => {
    console.log(props.match.params.id);
    return `${char.id}` === props.match.params.id;
  };

  const chosenChar = props.charListState.find(findChar);

  if (!chosenChar) return <div>Loading...</div>;

  return (
    <div>
      <Link to="/">Home</Link>
      <p>{chosenChar.name}</p>
      <img src={chosenChar.image} />
      <p>{chosenChar.species}</p>
    </div>
  );
};

export default CharacterCard;
