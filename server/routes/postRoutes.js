const express = require("express");
const { mongoose } = require("mongoose");
const router = express.Router();
const Post = require("../models/Post");

router.post("/new", (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    content: req.body.content,
    author_id: req.body.author_id,
    likes_count: 0,
    date: "2023-12-12",
    comment: [],
  });
  newPost.save();
  res.sendStatus(200);
});

router.get("/all", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
