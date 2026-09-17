import express from "express";
import mongoose from "mongoose";
import studentModel from "./model/studentModel.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
await mongoose.connect("mongodb://localhost:27017/schools").then(() => {
  console.log("Database connected successfully");
});

app.get("/", async (req, res) => {
  const student = await studentModel.find({});

  res.json(student);
});
app.post("/save", async (req, res) => {
  console.log(req.body);
  const { name, age, email } = req.body;
  if (!req.body || !name || !age || !email) {
    return res.status(400).json({
      message: "Please provide all required fields",
      success: false,
    });
  }
  const student = await studentModel.insertOne(req.body);

  res.json({
    message: "Student saved successfully",
    success: true,
    storedInfo: student,
  });
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
