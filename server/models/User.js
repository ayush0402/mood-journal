const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.ObjectId;

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  dateOfJoining: Date,
});

const User = mongoose.model("user", userSchema);
module.exports = { User, userSchema };
