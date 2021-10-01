import "./App.css";
import Filter from "./components/todos/filter/Filter";
import List from "./components/todos/list/List";
import Form from "./components/todos/form/Form";
import React, { useState, useEffect } from "react";

function App() {
  const [todos, settodos] = useState([{ todo: "", done: "" }]);
  return (
    <div className="App">
      <Form />
      <hr />
      <List />
      <hr />
      <br />
      <Filter />
      <hr />
      <br />
    </div>
  );
}

export default App;
