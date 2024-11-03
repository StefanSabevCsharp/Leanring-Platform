const { Schema } = require("mongoose");
const model = require("mongoose").model;


const blogSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    heading:{
        type: String,
        required: true
    },
    mainImageUrl:{
        type: String,
        required: true
    },
    secondImageUrl:{
        type: String,
        required: true
    },
    firstPartParagraph:{
        type: String,
        required: true
    },
    secondPartParagraph:{
        type: String,
        required: true
    },
    additionalText:{
        type: String,
        required: true
    },
    creator:{
        type: String,
        required: true
    },
    comments:{
        type: [Schema.Types.ObjectId],
        ref: "Comment",
        default: []
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },

}, { timestamps: true });

module.exports = model("Blog", blogSchema);