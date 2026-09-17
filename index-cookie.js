import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const cookieValue = req.cookies?.name;
  console.log("Cookies", cookieValue);
  res.send(`Home route accessed. Cookie value: ${cookieValue}`);
});
app.get("/login", (req, res) => {
  res.setHeader("Set-Cookie", "name=jyoti");
  res.send("Login route accessed");
});

app.listen(3200, () => {
  console.log("Server is running on port 3200");
});
