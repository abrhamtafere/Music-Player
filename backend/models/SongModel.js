const mongoose = require("mongoose");
// const uuid = require("node-uuid");
const { v4: uuidv4 } = require("uuid");

// Create a Song schema
const songSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  name: {
    type: String,
    required: true,
    // default: this.audio.fileName,
  },
  artist: {
    type: String,
    default: "Unknown Artist",
  }, 
  audio: {
    type: String,
    required: [true, "Music is required!"],
  },
  cover: {
    type: String,
    default: "../uploads/images/default.jpg",
  },
  color: {
    type: Object,
    default: ["#EF8EA9", "#ab417f"],
    // default: './images/cover.jpg',
  },
  active: {
    type: Boolean,
    default: false,
    // default: './images/cover.jpg',
  },
});

// Create a Song model
const Song = mongoose.model("Song", songSchema);

module.exports = Song;
