const SongModel = require("../models/SongModel");

// Get all songs
module.exports.getSongs = async (req, res) => {
  try {
    const songs = await SongModel.find().sort({ createdAt: -1 });

    res.json({
      status: 'sucess',
      total: songs.length,
      songs
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a song by ID
module.exports.getSong = async (req, res) => {
  try {
    const song = await SongModel.findById(req.params.id);

    if (!song) {
      return res.status(404).json({ error: "Song not found" });
    }

    res.json(song);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new song
module.exports.saveSong = async (req, res) => {
  try {
    const { name, artist } = req.body;
    // const audio = req.file.filename;
    const audio = req.files["audio"][0].filename;
    const cover = req.files["cover"][0].filename;

    const song = await SongModel.create({
      name,
      artist,
      audio,
      cover,
    });

    res.status(201).json(song);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a song by ID
module.exports.updateSong = async (req, res) => {
  try {
    // const { fileName, artist } = req.body;
    // const audio = req.file?.filename;

    const name = req.body.name || SongModel.name;
    const artist = req.body.artist || SongModel.artist;
    const cover = req.files.cover
      ? req.files["cover"][0].filename
      : SongModel.cover;
    const audio = req.files.audio ? req.files["audio"][0].filename : SongModel.audio;

    // const audio = req.files['audio'][0].filename;
    // const coverImage = req.files['coverImage'][0].filename;

    const song = await SongModel.findByIdAndUpdate(
      req.params.id,
      { name, artist, audio, cover },
      { new: true }
    );

    if (!song) {
      return res.status(404).json({ error: "Song not found" });
    }

    res.json(song);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a song by ID
module.exports.deleteSong = async (req, res) => {
  try {
    const song = await SongModel.findByIdAndDelete(req.params.id);

    if (!song) {
      return res.status(404).json({ error: "Song not found" });
    }

    res.json({ message: "Song deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

