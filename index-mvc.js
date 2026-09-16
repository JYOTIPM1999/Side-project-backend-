import express from "express";
import { handleUsers } from "./controller/userController.js";
const app = express();

app.set("view engine", "ejs");

app.get("/users", handleUsers);

// app.get("/login", (req, res) => {
//   res.send("Login Page");
// });

// app.get("/error", (req, res) => {
//   res.send("Error Page");
// });
// app.get("/users", (req, res) => {
//   res.send("Users Page");
// });

// function errorHandler(err, req, res, next) {
//   res.status(err.status || 500);
//   res.send("Try after some time");
// }

// app.use(errorHandler);

app.listen(3200);
