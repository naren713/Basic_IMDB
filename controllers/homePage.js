const express = require("express");

const router = express.Router();

const Movies = require("../models/Movies");

const Actors = require("../models/Actors");

const ActorMovies = require("../models/ActorMovies");

const User = require("../models/User");

const authenticate = require("../verifyTokens");

const jwt_decode = require("jwt-decode");

router.get("/home", authenticate, (req, res) => {
  let token = req.cookies.token;
  var { email, iat, exp } = jwt_decode(token);

  User.findOne({ where: { email: email } }).then((userInfo) => {
    // console.log(userInfo);

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
      res.render("homePage", { userInfo, imdbs, layout: "loggedin" });
    });
  });
});

module.exports = router;
