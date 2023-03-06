import TodoList from "@/components/todos/TodoList";
import { MongoClient } from "mongodb";
import MyHead from "@/components/head/index.js";
// import classes from "@/styles/Home.module.css";

export default function Home(props) {
  return (
    <>
      <MyHead title="Home" />
      <TodoList todos={props.todos} />
    </>
  );
}

// loaded before the page is rendered
export async function getStaticProps() {
  // fetch data from an API

  // connect to the database
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_KEY}@${process.env.DB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();
  const todosCollection = db.collection("todos");

  // get all todos from the database
  const todos = await todosCollection.find().sort({ _id: -1 }).toArray();

  client.close();

  return {
    props: {
      todos: todos.map((todo) => ({
        id: todo._id.toString(),
        description: todo.description,
        completed: todo.completed,
      })),
    },
    revalidate: 1,
  };
}
