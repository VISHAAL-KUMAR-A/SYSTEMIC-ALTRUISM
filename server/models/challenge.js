const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  funding: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  deadline: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  isVisible: {
    type: Boolean,
    default: true
  },
  reviewVideoUrl: String,
  challengeVideoUrl: String
});

const Challenge = mongoose.model("Challenge", challengeSchema);

module.exports = Challenge; 