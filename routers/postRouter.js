const router = require('express').Router();
const authorize = require('../middlewares/authorize');

router.route('/')
    .get(authorize)
    .post(authorize)
    .put(authorize)
    .delete(authorize)

module.exports = router;