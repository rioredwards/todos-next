import TodoItem from "./TodoItem";
import classes from "@/styles/Todo.module.css";
import { useRouter } from "next/router.js";

export default function TodoList({ todos }) {
  const router = useRouter();

  async function deleteTodoHandler(id) {
    console.log("deleting todo: " + id);
    const response = await fetch("/api/delete-todo", {
      method: "DELETE",
      body: JSON.stringify(id),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    router.push("/");
  }

  async function updateTodoHandler(id, updatedTodo) {
    console.log("toggling todo: ", id);
    console.log("updatedTodo: ", updatedTodo);
    const response = await fetch("/api/update-todo", {
      method: "PATCH",
      body: JSON.stringify({ id, updatedTodo }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    router.push("/");
  }

  return (
    <ul className={classes.todoList}>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          deleteTodoHandler={deleteTodoHandler}
          updateTodoHandler={updateTodoHandler}
        />
      ))}
    </ul>
  );
}
