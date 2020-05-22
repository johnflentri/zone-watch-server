const express = require('express')
const { Router } = express
const Post = require('./model')
const Locations = require('../UserLocation/model')
const auth = require('../auth/middleware');

const router = new Router()

router.get('/locationPosts/:id', auth, async (req, res, next) => {
  try {
    const posts = await Post.findAll()
    res.json(posts)
  } catch (error) {
  }
})

router.get('/post', auth, async (req, res, next) => {
  try {
    const locations = await Locations.findAll({ where: { userId: req.user.id } })
    const postsLocationId = locations.map(posts => posts.dataValues.locationId)
    const posts = await Post.findAll({
      where: {
        locationId: postsLocationId
      }
    })
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