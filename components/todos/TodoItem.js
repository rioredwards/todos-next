import { useRouter } from "next/router.js";
import classes from "@/styles/Todo.module.css";

export default function TodoItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/" + props.id);
  }

  return (
    <li className={classes.todoContainer}>
      <h2>{props.description}</h2>
      <button className={classes.button} onClick={showDetailsHandler}>
        Details
      </button>
    </li>
  );
}
