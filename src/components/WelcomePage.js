import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenterDiv = styled.div`
  text-align: center;
`;

const PaddedImage = styled.img`
  margin: 10%;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Wrapper>
        <header>
          <h1>Welcome to the ultimate fan site!</h1>
          <PaddedImage
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
          <CenterDiv>
            <Link to="/charList">Character List</Link>
          </CenterDiv>
        </header>
      </Wrapper>
    </section>
  );
}
