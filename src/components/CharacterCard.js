import React from "react";

const CharacterCard = props => {
  console.log(props);
  return (
    <div>
      <img src={props.character.image} />
      <p>
        {props.character.name} - {props.character.species}
      </p>
    </div>
  );
};

export default CharacterCard;
