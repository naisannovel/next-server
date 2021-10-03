const router = require('express').Router();
const authorize = require('../middlewares/authorize');
const { createPost } = require('../controllers/postController');

router.route('/')
    // .get(authorize)
    .post(authorize,createPost)

module.exports = router;