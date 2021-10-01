import React, { useState } from "react";

function Form() {
  return (
    <div id="form">
      <h1>todos</h1>
      <form>
        <input placeholder="what to do ?" autoFocus />
        <button>Add!</button>
      </form>
    </div>
  );
}

export default Form;
