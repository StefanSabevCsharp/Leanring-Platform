const express = require("express");
const dotenv = require("dotenv").config();
const router = require("../routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true, 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

function expressConfig(app) {
    app.use((req, res, next) => {
        if (req.method === 'HEAD') {
          res.status(200).end();
        } else {
          next();
        }
      });
    app.use(cors(corsOptions));
    app.use(cookieParser());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static("public"));
    app.use(router);
}

module.exports = expressConfig;
