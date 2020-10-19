const express = require("express");

const router = express.Router();

const Movies = require("../models/Movies");

const Actors = require("../models/Actors");

const ActorMovies = require("../models/ActorMovies");

const authenticate = require("../verifyTokens");

router.get("/create", authenticate, async (req, res) => {
  res.render("create", { layout: "loggedin" });
});

router.post("/create", async (req, res) => {
  const { name, gener, year, rating, covermovie } = req.body;
  const { fname, lname, origin, coveractor } = req.body;
  const newMovie = await Movies.create({
    name,
    gener,
    year,
    rating,
    covermovie,
  });
  const newActor = await Actors.create({ fname, lname, origin, coveractor });
  await newMovie.addActors(newActor);
  const movieActor = await newMovie.getActors();
  // const result = await Movies.findAll({ include: Actors });
  // console.log(`${result}`);
  res.render("homePage");
});

module.exports = router;
