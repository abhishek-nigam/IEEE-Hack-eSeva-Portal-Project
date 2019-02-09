const router = require('express').Router();
const passport = require("passport");

const User = require("../../../models/user");


router.get('/signUp', (req, res) => {
    return res.render("user/public/signUp");
});


router.post("/signUp", (req, res) => {

    const newUser = new User({
        username: req.body.username,
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        aadhar: req.body.aadhar,
        email: req.body.email
    });

    User.register(newUser, req.body.password, function (err, user) {
        if (err) {
            req.flash("error", err.message);
            return res.render("user/public/signUp");
        }

        // sign in
        passport.authenticate("local")(req, res, function () {
            return res.redirect("/user/public/dashboard");
        });
    });


});


router.get("/signIn", (req, res) => {
    return res.render("user/public/signIn");
});


router.post("/signIn", passport.authenticate("local", {
    successRedirect: "/user/public/dashboard",
    failureRedirect: "/login"
}), () => { });


router.get("/signOut", function (req, res) {
    req.logout();
    return res.redirect('/');
});


router.get("/profile", (req, res) => {
    res.send("user profile page")
})


router.get("/editProfile", (req, res) => {
    res.send("user profile EDIT page")
})


module.exports = router;