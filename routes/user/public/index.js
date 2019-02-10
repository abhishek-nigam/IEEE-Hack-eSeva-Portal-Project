const router = require('express').Router();
const passport = require("passport");

const User = require("../../../models/user");


router.get('/signup', (req, res) => {
    res.render("publicSignUp")
});


router.post("/signup", (req, res) => {
    //console.log(req.body)
    const newUser = new User({
        username: req.body.username,
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        aadhar: req.body.aadhar,
        email: req.body.email
    });
    console.log(newUser)

    User.register(newUser, req.body.password, function (err, user) {
        if (err) {
            // req.flash("error", err.message);
            console.log(err.message)
            return res.render("publicSignUp");
        }

        // sign in
        passport.authenticate("local")(req, res, function () {
            //return res.redirect("/user/public/dashboard");
            res.render("user/public/dashboard",{username: req.body.username})
        });
    });
});


router.get("/signIn", (req, res) => {
    //return res.render("user/public/signIn");
    res.render("publicLogin")
});


// router.post("/signIn", passport.authenticate("local", {
//     successRedirect: "/user/public/dashboard",
//     failureRedirect: "/user/public/signIn"
// }), (req,res) => { });

router.post("/signIn", (req,res) => {
    res.render("user/public/dashboard",{username: req.body.username})
})

router.get("/signOut", function (req, res) {
   // req.logout();
    res.redirect('/landing');
});

router.get("/dashboard", (req, res) => {
    return res.render("user/public/dashboard")
})


router.get("/profile", (req, res) => {
    return res.render('user/public/profile');
});


router.get("/editProfile", (req, res) => {
    res.send("user profile EDIT page")
});

router.post("/editProfile", (req, res) => {
    res.send("user profile EDIT page")
});


module.exports = router;