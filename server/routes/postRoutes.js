const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const analyze = require("../utils/nlp");

router.get("/s-analyzer", (req, res) => {
  const sentiment = analyze(req.body.content);
  res.status(200).json({ sentiment });
});

router.post("/new", (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    content: req.body.content,
    visibility: req.body.visibility,
    author_id: req.body.author_id,
    likes_count: 0,
    date: new Date(Date.now()),
    comments: [],
  });
  newPost.save();
  console.log("New user registered and saved to MongoDB.");
  res.sendStatus(200);
});

router.get("/all", async (req, res) => {
  const allPosts = await Post.find({});
  res.json(allPosts);
});

module.exports = router;
