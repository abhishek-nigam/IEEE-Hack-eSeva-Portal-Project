require('dotenv').config();

const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');


require('./startup')();

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));


const routes = require("./routes/index");
app.use(routes);


const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`[OK] server started on port ${port}`);
});