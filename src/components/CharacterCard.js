import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = props => {
  console.log(props);
  return (
    <div>
      {/* <Link to="/" /> */}
      <p>{props.character.name}</p>
      <img src={props.character.image} />
      <p>{props.character.species}</p>
    </div>
  );
};

export default CharacterCard;
