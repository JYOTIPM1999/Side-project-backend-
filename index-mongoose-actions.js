import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import studentModel from "./model/studentModel.js";

const app = express();
app.use(cors());
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
  const student = await studentModel.create(req.body);

  res.json({
    message: "Student saved successfully",
    success: true,
    storedInfo: student,
  });
});

app.put("/update/:id", async (req, res) => {
  console.log(req.body);
  const { name, age, email } = req.body;
  if (!req.body || !name || !age || !email) {
    return res.status(400).json({
      message: "Please provide all required fields",
      success: false,
    });
  }
  const student = await studentModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );

  res.json({
    message: "Student updated successfully",
    success: true,
    storedInfo: student,
  });
});

app.delete("/delete/:id", async (req, res) => {
  console.log(req.body);

  const student = await studentModel.findByIdAndDelete(req.params.id);

  res.json({
    message: "Student deleted successfully",
    success: true,
    storedInfo: student,
  });
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
