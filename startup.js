const mongoose = require('mongoose');
const express = require('express');
const expressSession = require('express-session');
const passport = require("passport");
const LocalStrategy = require("passport-local");
const bodyParser = require('body-parser');
const path = require('path');
const flash = require('connect-flash');

const User = require("./models/user")


module.exports = (app) => {


    app.set("view engine", "ejs");
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(expressSession({
        secret: process.env.COOKIE_SECRET || "string",
        resave: false,
        saveUninitialized: false
    }));
    app.use(flash());


    /// Setup passport

    app.use(passport.initialize());
    app.use(passport.session());
    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());


    /// Connect to DB

    const dbDetails = {
        user: process.env.DB_USER || 'twenty_four_seven_admin',
        password: process.env.DB_PASSWORD || 'hakuna_matata_123',
        host: process.env.DB_HOST || 'ds046037.mlab.com',
        port: process.env.DB_PORT || 46037,
        name: process.env.DB_NAME || 'twenty_four_seven_db'
    }

    mongoose.connect(`mongodb://${dbDetails.user}:${dbDetails.password}@${dbDetails.host}:${dbDetails.port}/${dbDetails.name}`, () => {
        console.log('[OK] mongo db connected')
    });

}