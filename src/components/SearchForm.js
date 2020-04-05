import React, { useState } from "react";
import styled from "styled-components";

const SearchWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5% 0;
`;

export default function SearchForm(props) {
  const [formState, setFormState] = useState({ name: "" });

  const changeHandler = key => event => {
    setFormState({
      ...formState,
      [key]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.onSubmit(formState.name);
  };

  return (
    <section className="search-form">
      <SearchWrap>
        <form onSubmit={event => handleSubmit(event)}>
          <input
            type="text"
            value={formState.name}
            onChange={changeHandler("name")}
            placeholder="Search Characters"
          />
          <button type="submit">And Awaaay We Go!</button>
        </form>
      </SearchWrap>
    </section>
  );
}
