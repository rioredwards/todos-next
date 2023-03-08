import { MongoClient, ObjectId } from "mongodb";
import TodoDetail from "@/components/todos/TodoDetail";
import MyHead from "@/components/head/index.js";

export default function TodoDetails(props) {
  return (
    <>
      <MyHead title="Todo-detail" description={props.todoData.description} />
      <TodoDetail description={props.todoData.description} />
    </>
  );
}

export async function getServerSideProps(context) {
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
