const Sequelize = require('sequelize')
const db = require('../db')
const Post = require('../post/model')
const Comment = require('../comment/model')
const Location = require('../location/model')
const UserLocation = require('../UserLocation/model')

const User = db.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lat: {
    type: Sequelize.DOUBLE,
    allowNull: true
  },
  lng: {
    type: Sequelize.DOUBLE,
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'users'
})

User.hasMany(Post)
User.hasMany(Comment)

User.belongsToMany(Location, { through: UserLocation, foreignKey: "userId" });
Location.belongsToMany(User, { through: UserLocation, foreignKey: "locationId" });



module.exports = User