import React, { useState } from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: todos.length + 1, text }]);
  };

  const deleteTodo = (id) => {
    debugger;
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoPage;
