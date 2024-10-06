const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const courseSchema = new Schema({
    courseTitle:{
        type: String,
        required: true
    },
    courseImageUrl:{
        type: String,
        required: true
    },
    startDate:{
        type: String,
        required: true
    },
    language:{
        type: String,
        required: true
    },
    freeRegularPrice:{
        type: Number,
        required: true
    },
    discountedPrice:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    aboutCourse:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    sold:{
        type: Number,
        default: 0
    },
    courseStatus:{
        type: String,
        enum: ["Available", "Unavailable"],
        default: "Available"
    },
    instructor:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    reviews:{
        type: [Schema.Types.ObjectId],
        ref: "Review",
        default: []
    },
    comments:{
        type: [Schema.Types.ObjectId],
        ref: "Comment",
        default: []
    }
    
},{timestamps: true});

module.exports = model("Course", courseSchema);