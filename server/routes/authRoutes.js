const express = require("express");
const router = express.Router();
const { User } = require("../models/User");

router.post("/register", async (req, res) => {
  const newUser = new User({ name: req.body.name, email: req.body.email });
  await newUser.save();
  res.sendStatus(200);
});

module.exports = router;
