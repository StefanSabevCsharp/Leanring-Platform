const dotenv = require('dotenv').config();
const express  = require("express");
const expressConfig = require("./config/expressConfig");
const dBConfig = require("./config/dbConfig");

const app = express();


expressConfig(app);
dBConfig();

app.listen(process.env.PORT, () => {
    console.log(`Express server is running on port ${process.env.PORT}`);
});
