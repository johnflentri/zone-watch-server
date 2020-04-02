const Sequelize = require("sequelize");
const db = require("../db");
const Post = require('../post/model')

const Location = db.define("location", {
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  lat: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  lng: {
    type: Sequelize.DOUBLE,
    allowNull: false
  }
})

module.exports = Location;