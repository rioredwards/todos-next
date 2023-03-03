import React from "react";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.id}</span>
          <span>&nbsp;</span>
          <span>{todo.text}</span>
          <span>&nbsp;</span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
