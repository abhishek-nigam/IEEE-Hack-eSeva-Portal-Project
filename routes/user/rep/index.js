const router = require('express').Router();


router.get("/signIn", function (req, res) {
    return res.render("user/rep/signIn");
});


router.post("/signIn", (req, res) => {
    return res.redirect("/user/rep/dashboard");
});


router.get("/signOut", function (req, res) {
    return res.redirect("/");
});


router.get("/dashboard", (req, res) => {
    res.send("dashboard page for representative")
});


module.exports = router;