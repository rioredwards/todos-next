import { useRouter } from "next/router.js";
import Card from "../ui/Card";

export default function TodoItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/" + props.id);
  }

  return (
    <li>
      <Card>
        <h2>{props.id}</h2>
        <p>{props.description}</p>
        <button onClick={showDetailsHandler}>Show Details</button>
      </Card>
    </li>
  );
}
