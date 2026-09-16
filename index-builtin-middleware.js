import express from "express";
import path from "path";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  const filePath = path.resolve("./public/home.html");
  res.sendFile(filePath);
});

app.get("/login", (req, res) => {
  res.send(`<form action="/submit" method="post">
    <input type="text" placeholder="enter email" name="email" />
    <input type="text" placeholder="enter password" name="password" />
    <button>Submit</button>
  </form>`);
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("Form submitted");
});
app.get("/users", (req, res) => {
  res.send("Users Page");
});

app.listen(3200);
