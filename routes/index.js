const router = require("express").Router();

const userRoutes = require('./user/index');


router.get('/', (req, res) => {
    return res.send('Index page');
});


router.use('/user', userRoutes);


module.exports = router;
