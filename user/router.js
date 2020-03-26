const express = require('express')

const { Router } = express
const User = require("./model")

const router = new Router()

router.get('/user', async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (error) {
  }
})

router.post('/user', async (req, res, next) => {
  try {
    const { username, email, password } = req.body

    const entity = { username, email, password }

    const user = await User.create(entity)

    res.send(user)
  } catch (error) {
    next(error)
  }
})

module.exports = router