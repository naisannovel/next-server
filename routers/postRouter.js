const router = require('express').Router();
const authorize = require('../middlewares/authorize');
const { createPost, getPhoto, getAllPost, getPostDetails } = require('../controllers/postController');

router.route('/')
    .get(getAllPost)
    .post(authorize,createPost)


router.route('/:id')
    .get(authorize, getPostDetails)


router.route('/photo/:id')
    .get(getPhoto)

module.exports = router;