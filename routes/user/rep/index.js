const router = require('express').Router(),
       passport   = require("passport"),
       User       = require("../../../models/user")

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

router.get("/dashboard", (req,res) => {
    res.send("dashboard page for representative")
})


module.exports = router;