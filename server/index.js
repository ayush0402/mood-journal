const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDb = require("./config/db");
const User = require("./models/User");

connectDb();
app.use(bodyParser.json());
app.use(cors());
const port = 5000;

app.get("/api/test", (req, res) => {
  res.json({
    message: "Hello world",
    qty: 10,
    arr: ["potato", "tomato", "banana"],
  });
});

app.post("/auth/register", async (req, res) => {
  const newUser = User({ name: req.body.name, email: req.body.email });
  await newUser.save();
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
