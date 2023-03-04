import { MongoClient, ObjectId } from "mongodb";
import TodoDetail from "@/components/todos/TodoDetail.js";
import Head from "next/head.js";

export default function TodoDetails(props) {
  return (
    <>
      <Head>
        <title>{props.todoData.description}</title>
        <meta name="description" content={props.todoData.description} />
      </Head>
      <TodoDetail description={props.todoData.description} />
    </>
  );
}

export async function getStaticPaths() {
  // defines dynamic routes to pre-render using getStaticProps()

  // connect to the database
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_KEY}@${process.env.DB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();
  const todosCollection = db.collection("todos");

  // get all todos from the database
  const todos = await todosCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    // if fallback: false: (exhaustive) any todoId that is not defined will result in a 404 page
    // if fallback: true: (partial) any todoId that is not defined will be fetched on the client side
    // if fallback: blocking: (partial) similar to true, but wait for the page to be generated before serving it to the client
    fallback: "blocking",
    paths: todos.map((todo) => ({
      params: { todoId: todo._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // Fetch data for a single todo

  const todoId = context.params.todoId;

  // connect to the database
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_KEY}@${process.env.DB_CLUSTER_URL}.pnosh5s.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();
  const todosCollection = db.collection("todos");

  // get a single todo from the database
  const selectedTodo = await todosCollection.findOne({
    _id: new ObjectId(todoId),
  });

  client.close();

  return {
    props: {
      todoData: {
        id: selectedTodo._id.toString(),
        description: selectedTodo.description,
      },
    },
  };
}
