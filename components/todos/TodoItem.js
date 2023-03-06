import { useRouter } from "next/router.js";
import classes from "@/styles/Todo.module.css";

export default function TodoItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/" + props.id);
  }

  return (
    <li className={classes.todoContainer}>
      <h2 onClick={showDetailsHandler}>{props.description}</h2>
      <button
        className={classes.button}
        onClick={() => props.deleteTodoHandler(props.id)}>
        Delete
      </button>
    </li>
  );
}
