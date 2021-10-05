import Filter from "./filter/Filter.js";
import Form from "./form/Form.js";
import List from "./list/List.js";
import React, { useState, useEffect } from "react";
const initialTodos = [
  { content: "Todo 1", isDone: false },
  { content: "Todo 2", isDone: true },
  { content: "Todo 3", isDone: false },
  { content: "Todo 4", isDone: false },
  { content: "Todo 5", isDone: true },
];
function Todos() {
  const [todos, setTodos] = useState(initialTodos);

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
  };
  /* const filterActive = () => {
    const filteredTodos = todos.filter((todo) => !todo.isDone);
    setTodos(filteredTodos);
  };
  const filterCompleted = () => {
    const filteredTodos = todos.filter((todo) => todo.isDone);
    setTodos(filteredTodos);
  };
  const filterAll = () => {
    const filteredTodos = [...todos];
    setTodos(filteredTodos);
  }; */
  // console.log("main component:", todos);
  return (
    <div>
      <Form addTodo={setTodos} todos={todos} />
      <hr />
      <List markTodo={markTodo} removeTodo={removeTodo} todos={todos} />
      <hr />
      <br />
      <Filter
        /* filterActive={filterActive}
        filterCompleted={filterCompleted}
        filterAll={filterAll} */
        todos={todos}
      />
      <hr />
      <br />
    </div>
  );
}

export default Todos;
