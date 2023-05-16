const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
  artistName: {
    type: String,
    default: "Unknown Artist"
  },
  coverImg: {
    type: String,
    default: './images/cover.jpg',
  },
  music: {
    type: String,
    required: [true, "Music is required!"],
  },
});

module.exports = mongoose.model("Music", musicSchema);
