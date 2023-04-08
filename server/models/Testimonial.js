const mongoose = require("mongoose");
const { userSchema } = require("./User");

const testimonialSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  author: {
    type: userSchema,
    required: true,
  },
});

const Testimonial = mongoose.model("Testimonial", testimonialSchema);

module.exports = Testimonial;
