const router = require('express').Router();

router.get('/signUp', (req, res) => {
    return res.send('sign up route');
});

module.exports = router;