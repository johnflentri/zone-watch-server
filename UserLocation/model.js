const Sequelize = require("sequelize");
const db = require("../db");

const UserLocation = db.define("user_location", {
  isHomeLocation: Sequelize.BOOLEAN
});

module.exports = UserLocation;