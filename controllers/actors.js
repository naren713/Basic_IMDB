const express = require("express");

const router = express.Router();

const Actors = require("../models/Actors");

router.get("/actors", async (req, res) => {
  try {
    await Actors.findAll().then((actors) => {
      res.render("actors", { actors });
    });
  } catch {
    res.sendStatus(404);
  }
});

module.exports = router;
