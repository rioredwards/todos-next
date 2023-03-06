import { useRouter } from "next/router.js";
import classes from "@/styles/Todo.module.css";

export default function TodoItem({
  todo,
  updateTodoHandler,
  deleteTodoHandler,
}) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/" + todo.id);
  }

  function toggleTodoHandler() {
    const updatedTodo = {
      ...todo,
      completed: !todo.completed,
    };

    updateTodoHandler(todo.id, updatedTodo);
  }

  return (
    <li className={classes.todoContainer}>
      <h2 onClick={showDetailsHandler}>{todo.description}</h2>

      <div className={classes.checkboxContainer}>
        <input
          className={classes.checkbox}
          type="checkbox"
          checked={todo.completed}
          onChange={toggleTodoHandler}
        />
      </div>
      <button
        className={classes.button}
        onClick={() => deleteTodoHandler(todo.id)}>
        Delete
      </button>
    </li>
  );
}
