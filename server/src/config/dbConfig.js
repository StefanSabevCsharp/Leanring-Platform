const mongoose = require('mongoose');

function dBConfig(){

    // mongoose.connect(process.env.MONGO_URI).then(() => {
    //     console.log("Database connected successfully");
    // }).catch((err) => {
    //     console.log("Error connecting to database", err);
    // });
    mongoose.connect(process.env.MONGO_URI, {
        serverSelectionTimeoutMS: 30000, 
        socketTimeoutMS: 30000,    
      }).then(() => {
        console.log("Database connected successfully");
    }).catch((err) => {
        console.log("Error connecting to database", err);
    });;

}

module.exports = dBConfig;