import TodoItem from "./TodoItem";
import classes from "@/styles/Todo.module.css";

export default function TodoList(props) {
  return (
    <ul className={classes.todoList}>
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} description={todo.description} />
      ))}
    </ul>
  );
}
