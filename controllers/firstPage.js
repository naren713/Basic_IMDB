const express = require("express");

const router = express.Router();

const Movies = require("../models/Movies");

const Actors = require("../models/Actors");

const ActorMovies = require("../models/ActorMovies");

router.get("/", (req, res) => {
  Movies.findAll({
    include: [
      {
        all: true,
        nested: true,
        model: Actors,
        required: true,
        // where: { actors.id: 1 },
      },
    ],
    // raw: true,
  }).then((imdbs) => {
    // console.log(JSON.stringify(imdbs, null, 2));
    // console.log([imdbs]["actors.fname"]);
    res.render("homePage", { imdbs });
  });
});

module.exports = router;
