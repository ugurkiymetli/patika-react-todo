import Filter from "./filter/Filter.js";
import Form from "./form/Form.js";
import List from "./list/List.js";
import React, { useState, useEffect } from "react";
const initialTodos = [
  { content: "Todo 1", done: false },
  { content: "Todo 2", done: true },
  { content: "Todo 3", done: false },
  { content: "Todo 4", done: false },
  { content: "Todo 5", done: false },
];
function Todos() {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <div>
      <Form addTodo={setTodos} todos={todos} />
      <hr />
      <List todos={todos} />
      <hr />
      <br />
      <Filter todos={todos} />
      <hr />
      <br />
    </div>
  );
}

export default Todos;
