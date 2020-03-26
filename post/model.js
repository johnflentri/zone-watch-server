const Sequelize = require("sequelize");
const db = require("../db");
const Location = require('../location/model')
const Comment = require('../comment/model')

const Post = db.define("post", {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

Post.hasMany(Comment)
Post.belongsTo(Location)

module.exports = Post;

