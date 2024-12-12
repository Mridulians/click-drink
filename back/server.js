const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer"); // Email sending
const crypto = require("crypto"); // Generating tokens or secure keys (built-in)
const cors = require("cors");
require("dotenv").config();

const clicksRoutes = require("./routes/clicks");

const app = express();
app.use(express.json()); // To parse incoming JSON payloads
const PORT = process.env.PORT || 4000;

// Database Connection
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/clicks", clicksRoutes);

app.get("/", (req, res) => {
  res.send("Hi i am Home page");
});
app.get("/about", (req, res) => {
  res.send("Hi i am about page");
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
