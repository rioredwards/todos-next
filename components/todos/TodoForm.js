import { useRef } from "react";
import Card from "../ui/Card";

export default function TodoForm(props) {
  const descriptionInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const enteredDescription = descriptionInputRef.current.value;

    const todoData = {
      description: enteredDescription,
    };

    props.onAddTodo(todoData);
  }

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="description">Todo Description</label>
          <input
            type="text"
            required
            id="description"
            ref={descriptionInputRef}
          />
        </div>
        <div>
          <button>Add Todo</button>
        </div>
      </form>
    </Card>
  );
}
