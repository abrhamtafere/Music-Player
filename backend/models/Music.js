const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  artistName: {
    type: String,
    default: "Unnown artist",
  },
  coverImg: {
    type: String,
    default: './images/cover.jpg',
  },
  song: {
    type: String,
    required: [true, "Music is required!"],
  },
});

module.exports = mongoose.model("Task", taskSchema);
