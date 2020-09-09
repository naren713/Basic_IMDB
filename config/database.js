const { Sequelize } = require("sequelize"),
  pg = require("pg");

module.exports = new Sequelize("imdb", "naren713", "naren713", {
  host: "localhost",
  dialect: "postgres",
  define: {
    timestamps: false,
  },
});
