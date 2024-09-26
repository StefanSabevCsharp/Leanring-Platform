
const getErrorMessage = (err) => {
    
    if (err.name === 'ValidationError') {
        return Object.values(err.errors).map((val) => val.message).join(', ');
    }

    if (err.code && err.code === 11000) {
        const field = Object.keys(err.keyValue);
        return `${field} already exists. Please choose a different ${field}.`;
    }

    return err.message || 'An unknown error occurred';
};

module.exports = { getErrorMessage };