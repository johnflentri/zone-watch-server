const express = require('express')
const { Router } = express
const Post = require('./model')
const auth = require('../auth/middleware');

const router = new Router()

router.get('/post', async (req, res, next) => {
  try {
    const posts = await Post.findAll()
    res.json(posts)
  } catch (error) {
  }
})

router.post('/locations/:id/post', auth, async (req, res, next) => {
  try {
    const entity = {
      title: req.body.title,
      content: req.body.content,
      locationId: req.body.locationId,
      userId: req.user.id
    }
    const post = await Post.create(entity)
    res.send(post)
  } catch (error) {
    next(error)
  }
})

module.exports = router