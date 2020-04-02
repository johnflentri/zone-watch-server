const Sequelize = require("sequelize");
const db = require("../db");

const UserLocation = db.define("user_location", {
  isHomeLocation: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  userId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  locationId: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = UserLocation;