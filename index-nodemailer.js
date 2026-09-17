import express from "express";
import nodemailer from "nodemailer";

const app = express();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jyotipm1999@gmail.com",
    pass: "", // Replace with your actual password or use environment variables for security
  },
});

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/mail", (req, res) => {
  res.render("mail");
});

app.post("/submit-email", (req, res) => {
  const email = req.body.mail;
  const subject = req.body.subject;

  const mailOptions = {
    from: "jyotipm1999@gmail.com",
    to: "jyotipm1999@gmail.com",
    subject: subject,
    text: email,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.send("Email submitted successfully!");
    }
  });
});

app.listen(3200, () => {
  console.log("Server is running on port 3200");
});
