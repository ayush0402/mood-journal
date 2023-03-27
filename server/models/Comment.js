const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.ObjectId;

const commentSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  author_id: {
    type: ObjectId,
    required: true,
  },
});

const Comment = mongoose.model("comment", commentSchema);
module.exports = { commentSchema, Comment };
