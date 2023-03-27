const mongoose = require("mongoose");
const { commentSchema } = require("./Comment");

const ObjectId = mongoose.Schema.ObjectId;

const postSchema = new mongoose.Schema({
  post_id: ObjectId,
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author_id: {
    type: ObjectId,
    required: true,
  },
  likes_count: Number,
  date: { type: Date, required: true },
  comments: [commentSchema],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
