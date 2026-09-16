import express from "express";
const app = express();

function checkAgeRouteMiddleware(req, res, next) {
  if (!req.query.age || req.query.age < 18) {
    res.send("You can't access");
  } else {
    next();
  }
}
function checkUrlRouteMiddleware(req, res, next) {
  console.log(req.url);
  next();
}

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/login", checkUrlRouteMiddleware, (req, res) => {
  res.send("Login Page");
});
app.get(
  "/users",
  checkAgeRouteMiddleware,
  checkUrlRouteMiddleware,
  (req, res) => {
    res.send("Users Page");
  },
);
app.get("/products", checkAgeRouteMiddleware, (req, res) => {
  res.send("Products Page");
});
app.listen(3200);
