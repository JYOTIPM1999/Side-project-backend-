import express from "express";
import { MongoClient, ObjectId } from "mongodb";
const app = express();

const dbName = "schools";
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
client.connect().then((connection) => {
  const db = connection.db(dbName);
  app.get("/api", async (req, res) => {
    const collection = db.collection("students");
    const students = await collection.find().toArray();
    res.send(students);
  });
  app.get("/add", (req, res) => {
    res.send(`<form action="/submit" method="post">
    <input type="text" placeholder="enter name" name="name"/>
    <input type="text" placeholder="enter email" name="email"/>
    <input type="text" placeholder="enter age" name="age"/>
    <button>Submit</button>
  </form>`);
  });
  app.post("/submit", async (req, res) => {
    console.log(req.body);
    const collection = db.collection("students");
    const results = await collection.insertOne(req.body);
    res.send(results);
    res.end();
  });

  app.post("/add-students-api", async (req, res) => {
    console.log(req.body);
    const collection = db.collection("students");
    const results = await collection.insertOne(req.body);
    res.send(results);
    res.end();
  });
  app.delete("/delete-students-api", async (req, res) => {
    console.log(req.body);
    const { email } = req.body;
    const collection = db.collection("students");
    const results = await collection.deleteOne({ email });
    res.send(results);
    res.end();
  });
  app.delete("/delete-students/:id", async (req, res) => {
    console.log(req.params.id);
    const collection = db.collection("students");
    const results = await collection.deleteOne({
      _id: new ObjectId(req.params.id),
    });
    res.send(results);
  });
});

app.listen(3200);
