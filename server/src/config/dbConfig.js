const mongoose = require('mongoose');

function dBConfig(){

    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("Database connected successfully");
    }).catch((err) => {
        console.log("Error connecting to database", err);
    });

}

module.exports = dBConfig;