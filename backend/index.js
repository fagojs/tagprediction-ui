const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.route");

const app = express();

const portNum = process.env.PORTNUM || 8000;
const db = process.env.DB_USER;

app.use(cors());
app.use(bodyParser.json());
app.use("/auth", authRoutes);
app.use("/users", userRoutes);

app.listen(portNum, () => {
  console.log(`Listening on http://localhost:${portNum}`);
});

mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to db.");
  }
);
