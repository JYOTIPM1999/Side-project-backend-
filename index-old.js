// const express = require("express");
// import express from "express";
// import path from "path";
// import home from "./pages/home.js";
// import login from "./pages/login.js";
// import submit from "./pages/submit.js";
// const app = express();

// app.get("/home", (req, res) => {
//   res.send(home());
// });
// app.get("/", (req, res) => {
//   res.send("hello ");
// });
// app.get("/login", (req, res) => {
//   res.send(login());
// });
// app.post("/submit", (req, res) => {
//   res.send(submit());
// });
// app.use((req, res) => {
//   const absPath = path.resolve("pages/404.html");
//   res.sendFile(absPath);
// });
// app.listen(3200);

import express from "express";
const app = express();

function checkRoute(req, res, next) {
  console.log(req.url);
  next();
}
function ageCheck(req, res, next) {
  if (!req.query.age || req.query.age < 18) {
    res.send("You can't access");
  } else {
    next();
  }
}
app.use(ageCheck);
// app.use(checkRoute);

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/users", (req, res) => {
  res.send("Users");
});
app.get("/products", (req, res) => {
  res.send("Products");
});
app.listen(3200);
