import TodoItem from "./TodoItem";
import classes from "@/styles/Todo.module.css";
import { useRouter } from "next/router.js";

export default function TodoList(props) {
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

  return (
    <ul className={classes.todoList}>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          description={todo.description}
          deleteTodoHandler={deleteTodoHandler}
        />
      ))}
    </ul>
  );
}
