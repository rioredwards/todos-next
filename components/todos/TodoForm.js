import { useRef } from "react";
import classes from "@/styles/Todo.module.css";

export default function TodoForm(props) {
  const descriptionInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const enteredDescription = descriptionInputRef.current.value;

    const todoData = {
      description: enteredDescription,
      completed: false,
    };

    props.onAddTodo(todoData);
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <h1>Add a Todo</h1>
      <div className={classes.formEntry}>
        <label htmlFor="description">Todo Description</label>
        <input
          type="text"
          required
          id="description"
          ref={descriptionInputRef}
        />
      </div>
      <div>
        <button className={classes.button}>Add Todo</button>
      </div>
    </form>
  );
}
