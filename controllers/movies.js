const express = require("express");

const router = express.Router();

const Movies = require("../models/Movies");

router.get("/movies", async (req, res) => {
  try {
    await Movies.findAll().then((movies) => {
      res.render("movies", { movies });
    });
  } catch {
    res.sendStatus(404);
  }
});

module.exports = router;
