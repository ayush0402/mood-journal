const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const analyze = require("../utils/nlp");

router.get("/s-analyzer", (req, res) => {
  const sentiment = analyze(req.body.content);
  res.status(200).json({ sentiment });
});

router.get("/all", async (req, res) => {
  const allPosts = await Post.find({});
  res.json(allPosts);
});

router.post("/new", async (req, res) => {
  const { title, content, visibility, author_id } = req.body;
  const sentiment = analyze(content);
  const date = new Date(Date.now());

  const newPost = new Post({
    title: title,
    content: content,
    visibility: visibility,
    author_id: author_id,
    likes_count: 0,
    date: date,
    sentiment: sentiment,
    comments: [],
  });
  await newPost.save();

  res.sendStatus(200);
});

module.exports = router;
