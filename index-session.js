import express from "express";
import session from "express-session";

const app = express();
app.use(express.json());
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true if using HTTPS
  }),
);
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const data = req.session.data || {};
  res.send(data);
});

app.post("/profile", (req, res) => {
  req.session.data = req.body;
  res.send(req.body);
});

app.listen(3200, () => {
  console.log("Server is running on port 3200");
});
