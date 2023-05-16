const { Router } = require("express");

const {
  getMusics,
  saveMusic,
  deleteMusic,
  updateMusic,
} = require("../controllers/MusicControllers");

const router = Router();

router.get("/get", getMusics);
router.post("/save", saveMusic);
router.patch("/update/:id", updateMusic);
router.delete("/delete/:id", deleteMusic);

module.exports = router;
