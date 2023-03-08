// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Server Side Code
// POST: /api/new-todo
import { MongoClient, ObjectId } from "mongodb";

export default async function handler(req, res) {
  console.log("req.method", req.method);
  if (req.method === "DELETE") {
    // get the todoId from the request body
    const todoId = req.body;
    // connect to the database
    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_KEY}@${process.env.DB_CLUSTER_URL}.pnosh5s.mongodb.net/?retryWrites=true&w=majority`
    );
    const db = client.db();
    const todosCollection = db.collection("todos");

    // delete a todo from the database
    const result = await todosCollection.deleteOne({
      _id: new ObjectId(todoId),
    });
    console.log(`${result.deletedCount} document(s) deleted`);

    client.close();

    res.status(200).json({ message: "Todo item deleted successfully" });
  }
}
