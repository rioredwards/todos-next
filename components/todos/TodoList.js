import React from "react";
import TodoItem from "./TodoItem.js";

export default function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} description={todo.description} />
      ))}
    </ul>
  );
}
