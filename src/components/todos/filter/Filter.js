import React from "react";

function Filter({ todos }) {
  return (
    <div id="filter">
      <span>
        <strong>{todos.length} </strong>
        items left
      </span>
      <br />
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
      <button>Clear completed</button>
    </div>
  );
}

export default Filter;
