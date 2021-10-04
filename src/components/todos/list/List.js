import React from "react";

function List({ todos }) {
  console.log("list compoonent - ", todos);
  return (
    <div id="list">
      liste component
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            <input type="checkbox" />
            {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
