const { Router } = require('express');
const Comment = require('./model');

const router = new Router();

router.get('/comment', async (req, res, next) => {
  try {
    const comments = await Comment.findAll()
    res.json(comments)
  } catch (error) {
  }
})

router.post('/comment', async function (req, res, next) {
  try {
    const { content } = req.body

    const entity = { content }

    const comment = await Comment.create(entity)

    res.send(comment)
  } catch (error) {
    next(error)
  }
}
)

module.exports = router