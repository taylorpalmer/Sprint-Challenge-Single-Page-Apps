import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const CharacterCard = props => {
  console.log(props.charListState);

  const findChar = char => {
    console.log(props.match.params.id);
    return `${char.id}` === props.match.params.id;
  };

  const chosenChar = props.charListState.find(findChar);

  if (!chosenChar) return <div>Loading...</div>;

  return (
    <Wrapper>
      <StyledLink to="/">Home</StyledLink>
      <p>{chosenChar.name}</p>
      <img src={chosenChar.image} />
      <p>{chosenChar.species}</p>
      <StyledLink to="/charList">Character List</StyledLink>
    </Wrapper>
  );
};

export default CharacterCard;
