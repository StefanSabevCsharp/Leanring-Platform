const { text } = require("express");

const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const reviewSchema = new Schema({
    stars:{
        type: Number,
        required: true
    },
    text:{
        type: String,
        required: true
    },
    course:{
        type: Schema.Types.ObjectId,
        ref: "Course",
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    creator:{
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = model("Review", reviewSchema);