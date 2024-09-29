const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const authSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 3, 
        maxLength: 30  
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        minLength: 3, 
        maxLength: 30  
    },
    email: {
        type: String,
        required: true,
        unique: true 
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ["student", "instructor", "admin"],
        default: "student"
    },
    phoneNumber: {
        type: String
    },
    bio: {
        type: String
    },
    courses: {
        type: [Schema.Types.ObjectId],
        ref: "Course"
    }

}, {timestamps: true});

module.exports = model("User", authSchema);
