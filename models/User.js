const { STRING } = require("sequelize");
const sequelize = require("sequelize");

const db = require("../config/database");
const Watchlist = require("./Watchlist");

const User = db.define("user", {
  name: {
    type: sequelize.STRING,
    required: true,
  },
  email: {
    type: sequelize.STRING,
    required: true,
  },
  password: {
    type: sequelize.STRING,
    required: true,
  },
});

Watchlist.belongsTo(User);

db.sync({})
  .then(() => {
    console.log("Synced");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = User;
