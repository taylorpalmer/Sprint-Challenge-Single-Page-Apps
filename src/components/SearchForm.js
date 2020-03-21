import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { withFormik, Form, Field } from "formik";

export default function SearchForm() {
  const [formState, setFormState] = useState({});

  const changeHandler = key => event => {
    setFormState({
      ...formState,
      [key]: event.target.value
    });

    setFormState({
      name: ""
    });
  };

  return (
    <section className="search-form">
      <form>
        <input
          type="text"
          value={formState.name}
          onChange={changeHandler("name")}
          placeholder="Search Characters"
        />
        <button type="submit">And Awaaaay We Go!</button>
      </form>
    </section>
  );
}
