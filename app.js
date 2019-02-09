require('dotenv').config();

const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');

const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user")

require('./startup')();

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));



//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "yes i am the most strong willed person on the planet!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const routes = require("./routes/index");
app.use(routes);


const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`[OK] server started on port ${port}`);
});