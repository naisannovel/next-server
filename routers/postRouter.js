const router = require('express').Router();
const authorize = require('../middlewares/authorize');
const { createPost, getPhoto } = require('../controllers/postController');

router.route('/')
    // .get(authorize)
    .post(authorize,createPost)


router.route('/photo/:id')
    .get(authorize, getPhoto)

module.exports = router;