import React from "react";

function Filter({ /* filterActive, filterCompleted, filterAll, */ todos }) {
  return (
    <div id="filter">
      <span>
        <strong>{todos.length} </strong>
        items left
      </span>
      <br />
      {/* <button onClick={filterAll}>All</button>
      <button onClick={filterActive}>Active </button>
      <button onClick={filterCompleted}>Completed</button> */}
      <button>All</button>
      <button>Active </button>
      <button>Completed</button>

      <button>Clear completed</button>
    </div>
  );
}

export default Filter;
