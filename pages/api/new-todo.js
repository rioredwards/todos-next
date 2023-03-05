// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Server Side Code
// POST: /api/new-todo
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // connect to the database
    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_KEY}@${process.env.DB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`
    );
    const db = client.db();
    const todosCollection = db.collection("todos");

    // insert data into the database
    const result = await todosCollection.insertOne(data);
    console.log(result);
    client.close();

    res.status(201).json({ message: "Todo inserted!" });
  }
}
