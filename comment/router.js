const { Router } = require('express');
const Comment = require('./model');
const auth = require('../auth/middleware');

const router = new Router();

router.get('/comment', async (req, res, next) => {
  try {
    const comments = await Comment.findAll()
    res.json(comments)
  } catch (error) {
  }
})

router.post('/comment', auth, async (req, res, next) => {
  try {
    const entity = {
      content: req.body.content,
      postId: req.body.postId,
      userId: req.user.id
    }
    const comment = await Comment.create(entity)
    res.send(comment)
  } catch (error) {
    next(error)
  }
}
)

module.exports = router