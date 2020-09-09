const sequelize = require("sequelize");

const db = require("../config/database");

const Actors = require("./Actors");

const Movies = db.define("movies", {
  name: {
    type: sequelize.STRING,
    required: true,
  },
  gener: {
    type: sequelize.STRING,
  },
  year: {
    type: sequelize.INTEGER,
  },
  ratings: {
    type: sequelize.INTEGER,
  },
});

db.sync({})
  .then(() => {
    console.log("Synced");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = Movies;
