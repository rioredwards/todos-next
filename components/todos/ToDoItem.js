import Card from "../ui/Card.js";

export default function ToDoItem(props) {
  return (
    <li>
      <Card>
        <h2>{props.id}</h2>
        <p>{props.description}</p>
      </Card>
    </li>
  );
}
