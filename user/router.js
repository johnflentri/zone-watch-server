const express = require('express')
const { Router } = express
const bcrypt = require('bcrypt')
const User = require('./model')
const auth = require('../auth/middleware')
const Location = require('../location/model')
const UserLocation = require('../UserLocation/model')

const router = new Router()

router.post('/user', async (req, res, next) => {
  try {
    const { username, email, password, lat, lng } = req.body
    const encrypted = bcrypt.hashSync(password, 10)
    const entity = { username, email, password: encrypted, lat, lng }
    const user = await User.create(entity)
    res.send(user)
  } catch (error) {
    next(error)
  }
})

router.put(
  '/user/:id', auth, async (req, res, next) => {
    try {
      const entity = {
        lat: req.body.lat,
        lng: req.body.lng
      }
      const { id } = req.user
      const user = await User.findByPk(id)
      console.log('req.body test:', req.body)
      console.log('user test:', user.dataValues)
      const updated = await user.update(entity)
      res.send(updated)
    } catch (error) {
      next(error)
    }
  }
)

router.get('/user', auth, async (req, res, next) => {
  const { id } = req.user
  try {
    const user = await User.findByPk(id)
    const users = await User.findAll()
    res.json({ user, users })
  } catch (error) {
  }
})

router.get('/userLocations', auth, async (req, res, next) => {
  try {
    const user = await User.findAll({
      where: { userId: req.user.id }
    })
    res.json(user)
  } catch (error) {
  }
})

router.post("/userLocations", auth, async (req, res, next) => {
  try {
    const entity = {
      isHomeLocation: true,
      userId: req.user.id,
      locationId: req.body.locationId
    }
    const addLocation = await UserLocation.create(entity)
    res.send(addLocation)
  } catch (error) {
  }
})

router.delete("/userLocations", auth, async (req, res, next) => {
  try {
    const location = await UserLocation.findOne({
      where: { locationId: req.body.locationId, userId: req.user.id }
    })
    if (location === null) {
      return null
    }
    await location.destroy()
    res.send(location)
  } catch (error) {
    next(error)
  }
})

router.get("/user/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, { include: [Location] })
    res.json(user)
  } catch (error) {
  }
})

module.exports = router