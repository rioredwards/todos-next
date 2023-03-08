// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Server Side Code
// PUT: /api/update-todo
import { MongoClient, ObjectId } from "mongodb";

export default async function handler(req, res) {
  console.log("req.method", req.method);
  if (req.method === "PATCH") {
    // get the todoId from the request body
    const todoId = req.body.id;
    const updatedTodo = req.body.updatedTodo;

    console.log("todoId", todoId);
    console.log("updatedTodo", updatedTodo);
    // connect to the database
    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_KEY}@${process.env.DB_CLUSTER_URL}.pnosh5s.mongodb.net/?retryWrites=true&w=majority`
    );
    const db = client.db();
    const todosCollection = db.collection("todos");

    // toggle a todo from the database
    const result = await todosCollection.updateOne(
      { _id: new ObjectId(todoId) },
      { $set: updatedTodo }
    );
    console.log(`${result.modifiedCount} document(s) updated`);

    client.close();

    res.status(200).json({ message: "Todo item updated successfully" });
  }
}
