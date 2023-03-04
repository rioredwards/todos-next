import React from "react";
import TodoItem from "./TodoItem.js";

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} description={todo.description} />
      ))}
    </ul>
  );
};

export default TodoList;
