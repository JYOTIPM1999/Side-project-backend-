// const express = require("express");
import express from "express";
import home from "./pages/home.js";
const app = express();

app.get("/", (req, res) => {
  res.send(home());
});
app.get("/about", (req, res) => {
  res.send("hello about");
});
app.listen(3200);
