const router = require('express').Router();
const authorize = require('../middlewares/authorize');
const { createPost, getPhoto, getAllPost, getPostDetails, getMyPost, deletePost, postUpdate } = require('../controllers/postController');

router.route('/')
    .get(getAllPost)
    .post(authorize,createPost)


router.route('/mine')
    .get(authorize, getMyPost)


router.route('/:id')
    .get(authorize, getPostDetails)
    .delete(authorize, deletePost)
    .put(authorize, postUpdate)


router.route('/photo/:id')
    .get(getPhoto)

module.exports = router;