const mongoose = require("mongoose");
const { commentSchema } = require("./Comment");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  visibility: {
    type: Boolean,
    required: true,
  },
  author_id: {
    type: String,
  },
  likes_count: Number,
  date: { type: Date, required: true },
  sentiment: mongoose.Decimal128,
  comments: [commentSchema],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
