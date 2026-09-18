import express from "express";
import { MongoClient } from "mongodb";

const app = express();
const url =
  "mongodb+srv://jyotipm1999_db_user:<passoword>@cluster0.ykpy8lu.mongodb.net/?appName=Cluster0";
const client = new MongoClient(url);

client.connect().then(() => {
  console.log("Connected to MongoDB");
});

async function dbConnection() {
  const db = client.db("school");
  const collectionResults = db.collection("student");
  const result = await collectionResults.find({}).toArray();
  console.log(result);
}
dbConnection();

app.get("/", (req, res) => {});

app.listen(3200, () => {
  console.log("Server is running on port 3200");
});
