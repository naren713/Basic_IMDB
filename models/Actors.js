const { STRING } = require("sequelize");
const sequelize = require("sequelize");

const db = require("../config/database");

const Movies = require("./Movies");

const Actors = db.define("actors", {
  fname: {
    type: sequelize.STRING,
    required: true,
  },
  lname: {
    type: sequelize.STRING,
  },
  origin: {
    type: sequelize.STRING,
  },
  coveractor: {
    type: sequelize.STRING,
  },
});

db.sync({})
  .then(() => {
    console.log("Synced");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = Actors;
