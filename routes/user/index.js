const router = require('express').Router();

const publicRoutes = require('./public/index');

router.use('/public', publicRoutes);


module.exports = router;