import TodoList from "@/components/todos/TodoList.js";
import Head from "next/head.js";
import { MongoClient } from "mongodb";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Next Todos</title>
        <meta
          name="description"
          content="A simple todo app built with Next.js and MongoDB."
        />
      </Head>
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
  const todos = await todosCollection.find().toArray();

  client.close();

  return {
    props: {
      todos: todos.map((todo) => ({
        id: todo._id.toString(),
        description: todo.description,
      })),
    },
    revalidate: 1,
  };
}
