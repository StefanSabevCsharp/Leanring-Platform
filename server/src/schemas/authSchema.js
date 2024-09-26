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
    username: {
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
    }
});

module.exports = model("User", authSchema);
