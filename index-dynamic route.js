import express from "express";
const app = express();

app.get("/", (req, res) => {
  let users = ["Abc", "efg", "xyz"];
  let data = ``;
  for (let i = 0; i < users.length; i++) {
    data += `<li><a href="/users/${users[i]}">${users[i]}</a></li>`;
  }
  res.send(`Login Page<br><ul>${data}</ul>`);
});

app.get("/users/:name", (req, res) => {
  res.send("Users Page");
});
app.get("/login", (req, res) => {
  res.send("Login Page");
});

app.get("/error", (req, res) => {
  res.send("Error Page");
});

function errorHandler(err, req, res, next) {
  res.status(err.status || 500);
  res.send("Try after some time");
}

app.use(errorHandler);

app.listen(3200);
