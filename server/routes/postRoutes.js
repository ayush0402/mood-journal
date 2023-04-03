const express = require("express");
const { mongoose } = require("mongoose");
const router = express.Router();
const Post = require("../models/Post");
const { Comment } = require("../models/Comment");
const analyze = require("../utils/nlp");

router.get("/s-analyzer", (req, res) => {
  const content = req.params["content"];
  const sentiment = analyze(content);
  res.status(200).json({ sentiment });
});

router.get("/all", async (req, res) => {
  const allPosts = await Post.find({});
  res.json(allPosts);
});

router.get("/get-post-by-id", async (req, res) => {
  const id = req.query["id"];
  const objectId = new mongoose.Types.ObjectId(id);
  const post = await Post.find({ _id: objectId });
  res.status(200).json(post);
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

router.post("/add-new-comment", async (req, res) => {
  const _comment = req.body;
  const content = _comment.content;
  const postId = _comment.postId;
  const objectId = new mongoose.Types.ObjectId(postId);
  const userId = _comment.userId;
  const date = new Date(Date.now());

  const comment = new Comment({
    content: content,
    date: date,
    author_id: userId,
  });
  await Post.updateOne(
    { _id: objectId },
    {
      $push: { comments: comment },
    }
  );
  const updatedPost = await Post.find({ _id: postId });
  res.json(updatedPost);
});

module.exports = router;
