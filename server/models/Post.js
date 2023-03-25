const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  likes: Number,
  date: { type: Date, required: true },
  comments: [String],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
