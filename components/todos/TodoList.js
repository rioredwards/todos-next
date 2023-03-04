import React from "react";
import ToDoItem from "./ToDoItem.js";

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <ToDoItem key={todo.id} id={todo.id} description={todo.description} />
      ))}
    </ul>
  );
};

export default TodoList;
