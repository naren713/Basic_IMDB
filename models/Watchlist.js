const sequelize = require("sequelize");

const db = require("../config/database");

const User = require("./User");

const Watchlist = db.define("watchlist", {
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
  covermovie: {
    type: sequelize.STRING,
  },
});

User.associate = (models) => {
  Users.hasMany(models.Watchlist);
};

db.sync({})
  .then(() => {
    console.log("Synced");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = Watchlist;
