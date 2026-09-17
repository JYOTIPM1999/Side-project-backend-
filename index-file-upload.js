import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

app.get("/", (req, res) => {
  res.send(`
    <form action="/upload" method="post" enctype="multipart/form-data">
      <input type="file" name="myFile" />
      <button type="submit">Upload</button>
    </form>`);
  res.json({
    message: "Welcome to the student management system",
    success: true,
  });
});
app.post("/upload", upload.single("myFile"), (req, res) => {
  console.log(req.file);

  res.json({
    message: "Student saved successfully",
    success: true,
    data: req.file,
  });
});

app.listen(3200, () => {
  console.log("Server is running on port 3200");
});
