const express = require("express");

const router = express.Router();

const Movies = require("../models/Movies");
const Watchlist = require("../models/Watchlist");
const User = require("../models/User");

const authenticate = require("../verifyTokens");

const jwtDecode = require("jwt-decode");

router.get("/watchlist", async (req, res) => {
  try {
    var token = req.cookies.token;
    var { email, x, time } = jwtDecode(token);
    // console.log(email);

    let curUser = await User.findOne({
      where: {
        email: email,
      },
    });
    await Watchlist.findAll({
      include: [
        {
          all: true,
          nested: true,
          model: User,
          required: true,
          where: {
            id: curUser.id,
          },
        },
      ],
    }).then((toWatch) => {
      //   console.log(JSON.stringify(toWatch));
      res.render("watchlist", { toWatch, layout: "loggedin" });
    });
  } catch (error) {}
});

router.delete("/deletefromwatchlist/:id", async (req, res) => {
  try {
    await Watchlist.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/watchlist");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
