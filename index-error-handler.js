import express from "express";
const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/login", (req, res) => {
  res.send("Login Page");
});

app.get("/error", (req, res) => {
  res.send("Error Page");
});
app.get("/users", (req, res) => {
  res.send("Users Page");
});

function errorHandler(err, req, res, next) {
  res.status(err.status || 500);
  res.send("Try after some time");
}

app.use(errorHandler);

app.listen(3200);
