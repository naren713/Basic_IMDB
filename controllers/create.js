const express = require("express");

const router = express.Router();

const Movies = require("../models/Movies");

const Actors = require("../models/Actors");

const ActorMovies = require("../models/ActorMovies");

router.get("/create", async (req, res) => {
  res.render("create");
});

router.post("/create", async (req, res) => {
  const { name, gener, year, ratings } = req.body;
  const { fname, lname } = req.body;
  const newMovie = await Movies.create({ name, gener, year, rating });
  const newActor = await Actors.create({ fname, lname });
  await newMovie.addActors(newActor);
  const movieActor = await newMovie.getActors();
  // const result = await Movies.findAll({ include: Actors });
  // console.log(`${result}`);
  res.render("homePage");
});

module.exports = router;
