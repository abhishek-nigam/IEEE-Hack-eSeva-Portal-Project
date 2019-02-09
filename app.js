require('dotenv').config();

require('./startup')();


const express = require("express");


const app = express();
app.set("view engine", "ejs");


const routes = require("./routes/index");
app.use(routes);


const port = process.env.PORT || 3000;


app.listen(port, function () {
    console.log(`[OK] server started on port ${port}`);
});