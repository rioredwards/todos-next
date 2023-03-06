import TodoItem from "./TodoItem";
import classes from "@/styles/Todo.module.css";

export default function TodoList(props) {
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
