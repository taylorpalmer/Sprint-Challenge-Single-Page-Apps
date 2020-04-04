import React, { useState } from "react";

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
      <form onSubmit={event => handleSubmit(event)}>
        <input
          type="text"
          value={formState.name}
          onChange={changeHandler("name")}
          placeholder="Search Characters"
        />
        <button type="submit">And Awaaay We Go!</button>
      </form>
    </section>
  );
}
