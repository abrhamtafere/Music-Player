const mongoose = require("mongoose");

// Create a Song schema
const songSchema = new mongoose.Schema({
  fileName: {
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
    required: [true, "Music is required!"]
  },
  coverImage: {
    type: String,
    required: true,
    // default: './images/cover.jpg',
  }
});

// Create a Song model
const Song = mongoose.model('Song', songSchema);

module.exports = Song;