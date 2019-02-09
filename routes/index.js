var router = require("express").Router();

router.get('/', (req, res) => {
    return res.send('Index page');
})


module.exports = router;
