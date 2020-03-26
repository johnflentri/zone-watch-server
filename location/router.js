const express = require('express')

const { Router } = express
const Location = require("./model")

const router = new Router()

router.get('/location', async (req, res, next) => {
  try {
    const locations = await Location.findAll()
    res.json(locations)
  } catch (error) {
  }
})

router.post('/location', async function (req, res, next) {
  try {
    const { name, lat, lng } = req.body

    const entity = { name, lat, lng }

    const location = await Location.create(entity)

    res.send(location)
  } catch (error) {
    next(error)
  }
}
)

module.exports = router