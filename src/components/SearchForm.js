import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";

export default function SearchForm() {
  return (
    <section className="search-form">
      // Add a search form here
      <Form>
        <Field name="search" placeholder="Search Characters" />
        <button type="submit">And Awaaaaaay We Go!</button>
      </Form>
    </section>
  );
}
