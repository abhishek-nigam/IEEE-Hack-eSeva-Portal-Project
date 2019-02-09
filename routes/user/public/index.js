const router = require('express').Router(),
       passport   = require("passport"),
       User       = require("../../../models/user")

router.get('/signUp', (req, res) => {
    return res.send('sign up route');
});

//handle sign up logic
router.post("/signup", (req, res) => {
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            //req.flash("error",err.message);
            return res.send("some error")
            // return res.render("signup");
        }
        passport.authenticate("local")(req, res, function(){
            //req.flash("success", "Welcome to Vseva " + user.username);
            //res.redirect("/campgrounds");
            res.send("signup logic")
        });
    });
});

//show login form
router.get("/login", function(req, res){
   // res.render("login");
   res.send("login form")
});

//handle login logic
//app.post("/login", middleware, callback)
router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/problems",
        // successFlash: 'Welcome to Vseva!',
        // failureFlash: true,
        failureRedirect: "/login"
    }), function(req, res){
    });

//logout route
router.get("/logout",function(req, res){
    req.logout();
   // req.flash("success","Logged you out!")
   //res.redirect("/problems");
   res.send("logged out")
});


router.get("/profile", (req,res) => {
    res.send("user profile page")
})

router.get("/editProfile", (req,res) => {
    res.send("user profile EDIT page")
})

module.exports = router;