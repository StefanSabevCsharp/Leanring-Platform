const { Schema } = require("mongoose");

const model = require("mongoose").model;

const commentSchema = new Schema({
    text:{
        type: String,
        required: true
    },
    course:{
        type: Schema.Types.ObjectId,
        ref: "Course"
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    creator:{
        type: String
    }
}, { timestamps: true });

module.exports = model("Comment", commentSchema);