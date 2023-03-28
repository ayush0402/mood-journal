const express = require("express");
const router = express.Router();
const { User } = require("../models/User");

router.post("/register", async (req, res) => {
  const newUser = new User({ name: req.body.name, email: req.body.email });
  await newUser.save();
  res.sendStatus(200);
});

router.get("/get-user-by-email", async (req, res) => {
  const user = await User.find({ email: req.body.email });
  res.json(user);
});

module.exports = router;
