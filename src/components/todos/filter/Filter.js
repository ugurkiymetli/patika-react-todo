import React from "react";

function Filter() {
  return (
    <div id="filter">
      <span>
        <strong>4 </strong>
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
