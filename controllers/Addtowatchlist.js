const express = require("express");

const router = express.Router();

const Movies = require("../models/Movies");
const Watchlist = require("../models/Watchlist");
const User = require("../models/User");

const authenticate = require("../verifyTokens");

const jwtDecode = require("jwt-decode");

router.post("/addtowatchlist/:id", authenticate, async (req, res) => {
  try {
    var token = req.cookies.token;
    var { email, x, time } = jwtDecode(token);
    // console.log(email);

    let curUser = await User.findOne({
      where: {
        email: email,
      },
    });
    console.log(JSON.stringify(curUser));
    let curMovie = await Movies.findOne({
      where: {
        id: req.params.id,
      },
    });
    console.log(JSON.stringify(curMovie));
    const { name, gener, year, rating, covermovie } = curMovie;
    const newEntry = await Watchlist.create({
      name,
      gener,
      year,
      rating,
      covermovie,
    });
    await newEntry.setUser(curUser);
    res.redirect("/watchlist");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
