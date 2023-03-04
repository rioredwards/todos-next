import TodoItem from "./TodoItem";

export default function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} description={todo.description} />
      ))}
    </ul>
  );
}
