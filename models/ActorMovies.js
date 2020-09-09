const sequelize = require("sequelize");

const db = require("../config/database");

const Movies = require("./Movies");

const Actors = require("./Actors");
const { Sequelize } = require("../config/database");

const ActorMovies = db.define("ActorMovies", {
  // MovieId: {
  //   type: sequelize.INTEGER,
  //   references: {
  //     model: Movies,
  //     key: "id",
  //   },
  // },
  // ActorId: {
  //   type: sequelize.INTEGER,
  //   references: {
  //     model: Actors,
  //     key: "id",
  //   },
  // },
});

// Actors.associate = (models) => {
Actors.belongsToMany(Movies, {
  through: "ActorMovies",
  foreignKey: "actor_id",
});
// };

// Movies.associate = (models) => {
Movies.belongsToMany(Actors, {
  through: "ActorMovies",
  foreignKey: "movie_id",
});
// };

module.exports = ActorMovies;
