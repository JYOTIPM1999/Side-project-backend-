import express from "express";
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home", { name: "John Doe" });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/error", (req, res) => {
  res.render("error");
});
app.get("/users", (req, res) => {
  res.render("users");
});

function errorHandler(err, req, res, next) {
  res.status(err.status || 500);
  res.send("Try after some time");
}

app.use(errorHandler);

app.listen(3200);
