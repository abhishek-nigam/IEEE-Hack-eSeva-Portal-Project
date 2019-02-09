const router = require('express').Router();

const publicRoutes = require('./public/index');
const repRoutes = require('./rep/index');

router.use('/public', publicRoutes);
router.use('/rep', repRoutes);


module.exports = router;