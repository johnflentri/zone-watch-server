const express = require('express')

const { Router } = express
const Post = require("./model")

const router = new Router()

router.get('/post', async (req, res, next) => {
  try {
    const posts = await Post.findAll()
    res.json(posts)
  } catch (error) {
  }
})

router.post('/post', async function (req, res, next) {
  try {
    const { title, content, lat, lng } = req.body

    const entity = { title, content, lat, lng }

    const post = await Post.create(entity)

    res.send(post)
  } catch (error) {
    next(error)
  }
}
)

module.exports = router