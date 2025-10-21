import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = [];

app.post("/api/signup", async (req, res) => {
  const { firstname, lastname, email, password, location } = req.body;

  const existing = users.find((u) => u.email === email);
  if (existing)
    return res.status(400).json({ message: "Email already exists" });

  const token = uuidv4();
  users.push({
    firstname,
    lastname,
    email,
    password,
    location,
    token,
    verified: false,
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yourappemail@gmail.com",
      pass: "your-app-password",
    },
  });

  const link = `http://localhost:5000/api/confirm/${token}`;

  const mailOptions = {
    from: "Elev8tr <yourappemail@gmail.com>",
    to: email,
    subject: "Confirm your Elev8tr account",
    html: `
      <h2>Hello ${firstname},</h2>
      <p>Welcome to Elev8tr! Please confirm your account by clicking the link below:</p>
      <a href="${link}" target="_blank">Confirm Account</a>
      <p>If you didn’t request this, please ignore this email.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
  res
    .status(200)
    .json({ message: "Signup successful, please check your email" });
});

app.get("/api/confirm/:token", (req, res) => {
  const { token } = req.params;
  const user = users.find((u) => u.token === token);

  if (!user) return res.status(400).send("Invalid token.");
  user.verified = true;
  res.send("<h2>Account confirmed! You can now login.</h2>");
});

app.listen(5000, () => console.log("Server running on port 5000"));
