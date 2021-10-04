import React, { useState } from "react";

function Form({ addTodo, todos }) {
  const [form, setForm] = useState({ content: "", done: false });
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.content === "") {
      console.log("boş not girme");
      return false;
    }
    addTodo([...todos, form]);
  };
  const onFormChange = (e) => {
    setForm({ ...form, content: e.target.value });
  };

  return (
    <div id="form">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          placeholder="what to do ?"
          autoFocus
          value={form.content}
          onChange={onFormChange}
        />
        <button>Add!</button>
      </form>
    </div>
  );
}

export default Form;
