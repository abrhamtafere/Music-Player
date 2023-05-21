const { Router } = require("express");
const multer = require("multer");

const {
  getSongs,
  getSong,
  saveSong,
  deleteSong,
  updateSong,
} = require("../controllers/SongControllers");

const router = Router();

// Configure Multer for audio and image file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === "audio") {
      cb(null, "uploads/audio/");
    } else if (file.fieldname === "coverImage") {
      cb(null, "uploads/images/");
    } else {
      cb(new Error("Invalid file type"));
    }
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
  // fileFilter: (req, file, cb) => {
  //   if (file.mimetype.includes("audio/")) {
  //     cb(null, true);
  //   } else {
  //     cb(new Error("Please upload an audio file"), false);
  //   }
  // },
});

router.get("/songs", getSongs);
router.get("/songs/:id", getSong);
router.post(
  "/songs",
  upload.fields([
    { name: "audio", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  saveSong
);
router.put(
  "/songs/:id",
  upload.fields([
    { name: "audio", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  updateSong
);
router.delete("/songs/:id", deleteSong);

module.exports = router;
