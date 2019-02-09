const router = require("express").Router();

const userRoutes = require('./user');
const problemRoutes = require('./problem');


router.get('/', (req, res) => {
    res.render("landing");
});


router.use('/user', userRoutes);
router.use('/problem', problemRoutes);


module.exports = router;