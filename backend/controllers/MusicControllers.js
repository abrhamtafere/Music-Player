const MusicModel = require("../models/MusicModel");

module.exports.getMusics = async (req, res) => {
  const musics = await MusicModel.find();
  res.send(musics);
};

module.exports.saveMusic = async (req, res) => {
  // const music = req.body;
  

  MusicModel.create(req.body)
    .then((data) => {
      console.log("Saved Successfully...");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

module.exports.updateMusic = (req, res) => {
  // const { id } = req.params;
  // const music = req.body;

  MusicModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
    .then((data) => {
      console.log("Updated successfully");
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

module.exports.deleteMusic = (req, res) => {
  const { id } = req.params;

  MusicModel.findByIdAndDelete(id)
    .then(() => res.send("Deleted successfully"))
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};
