const mongoose = require('mongoose');

exports.getErrorMessage = (err) => {
    if (err instanceof mongoose.MongooseError) {
        if (err.errors) {
            
            return Object.values(err.errors).map(e => e.message).join(', ');
        }
        
        if (err.code === 11000) {
            return 'Duplicate key error: a record with this value already exists.';
        }
        return 'Mongoose validation error.';
    } else if (err instanceof Error) {
        return err.message; 
    }
    return 'An unknown error occurred.';
};
