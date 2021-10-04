import "./App.css";

import Todos from "./components/todos/Todos";
import React, { useState, useEffect } from "react";
function App() {
  return (
    <div className="App">
      <Todos />
    </div>
  );
}

export default App;
