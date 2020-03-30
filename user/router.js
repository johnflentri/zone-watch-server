const express = require('express')
const { Router } = express
const bcrypt = require("bcrypt")
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
    const { username, email, password, lat, lng } = req.body
    const encrypted = bcrypt.hashSync(password, 10)
    const entity = { username, email, password: encrypted, lat, lng }
    const user = await User.create(entity)
    res.send(user)
  } catch (error) {
    next(error)
  }
})

// router.get("/user/:id", async (req, res, next) => {
//   User.findByPk(req.params.id)
//   try {
//     const user = await User.findByPk()
//     res.json(user)
//   } catch (error) {
//   }
// })

module.exports = router