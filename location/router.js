const express = require('express')
const { Router } = express
const Location = require("./model")
const auth = require('../auth/middleware');

const router = new Router()

router.get('/location', auth, async (req, res, next) => {
  try {
    const locations = await Location.findAll()
    res.json(locations)
  } catch (error) {
  }
})

router.post('/location', auth, async function (req, res, next) {
  try {
    const { name, lat, lng } = req.body

    const entity = { name, lat, lng }

    const location = await Location.create(entity)

    res.send(location)
  } catch (error) {
    next(error)
  }
})

router.get("/location/:id", auth, async (req, res, next) => {
  try {
    const location = await Location.findByPk(req.params.id)
    res.json(location)
  } catch (error) {
  }
})

module.exports = router