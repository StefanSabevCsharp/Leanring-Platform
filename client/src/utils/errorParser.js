
export const getErrorMessage = (error) => {
  
    if (error.response && error.response.data) {
        return error.response.data.message || 'An error occurred';
    }

    if (error.request) {
        return 'Network error. Please try again later.';
    }

    return error.message || 'An unknown error occurred';
};
