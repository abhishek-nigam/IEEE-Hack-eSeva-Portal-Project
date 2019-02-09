var express    = require("express"),
    router     = express.Router(),
    passport   = require("passport"),
    User       = require("../models/user");

router.get("/", function(req,res){
    res.render("landing");
});

//========AUTH ROUTES===========//

//show register form
router.get("/register", function(req, res){
    res.render("register");
});

//handle sign up logic
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash("error",err.message);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to YelpCamp " + user.username);
            res.redirect("/campgrounds");
        });
    });
});


module.exports = router;
    