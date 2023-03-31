const express = require("express");
const router = express.Router();
const { User } = require("../models/User");

router.get("/get-user-by-email", async (req, res) => {
  const _email = req.query["email"];
  const user = await User.find({ email: _email });
  res.json(user);
});

router.post("/register", async (req, res) => {
  const newUser = new User({ name: req.body.name, email: req.body.email });
  await newUser.save();
  res.sendStatus(200);
});

module.exports = router;
