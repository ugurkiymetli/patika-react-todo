import React from "react";

function List({ markTodo, removeTodo, todos }) {
  // console.log("list compoonent - ", todos);
  return (
    <div id="list">
      liste component
      <ul>
        {todos.map((item, index) => (
          <li
            key={index}
            style={{ textDecoration: item.isDone ? "line-through" : "" }}
          >
            <input
              type="checkbox"
              checked={item.isDone ? true : false}
              onChange={() => markTodo(index)}
            />
            {item.content}
            <button
              style={{ alignItems: "flex-end" }}
              onClick={() => removeTodo(index)}
            >
              SİL X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
