import React from "react";

const CharacterCard = (props) => {
  return (
    <p>{props.character.name}</p>
    <img src={props.character.image} />
    );
}
