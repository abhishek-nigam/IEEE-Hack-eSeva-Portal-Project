const router = require('express').Router(),
       passport   = require("passport"),
       User       = require("../../../models/user")

router.get('/signUp', (req, res) => {
    //return res.send('sign up route');
    res.render("register");
});

//handle sign up logic
router.post("/signup", (req, res) => {
    console.log(req.body)
   var newUser = new User({username: req.body.username,first_name: req.body.firstname, last_name: req.body.lastname, aadhar: req.body.aadhar, email: req.body.email});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            //req.flash("error",err.message);
            return res.send(err.message)
            // return res.render("signup");
        }
        passport.authenticate("local")(req, res, function(){
            //req.flash("success", "Welcome to Vseva " + user.username);
            //res.redirect("/campgrounds");
            res.send("signup logic successfull - the profile page")
        });
    });


});

//show login form
router.get("/login", function(req, res){
    res.render("login");
   //res.send("login form")
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