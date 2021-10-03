const router = require('express').Router();
const authorize = require('../middlewares/authorize');
const { createPost, getPhoto, getAllPost } = require('../controllers/postController');

router.route('/')
    .get(getAllPost)
    .post(authorize,createPost)


router.route('/photo/:id')
    .get(getPhoto)

module.exports = router;