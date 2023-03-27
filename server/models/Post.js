const mongoose = require("mongoose");
const { userSchema } = require("./User");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: userSchema,
    required: true,
  },
  likes: Number,
  date: { type: Date, required: true },
  comments: [String],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
