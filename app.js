require('dotenv').config();

const express = require("express");


const app = express();

require('./startup')(app);


const routes = require("./routes/index");
app.use(routes);


const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`[OK] server started on port ${port}`);
});