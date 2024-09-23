import axios from 'axios';

export const register = async (data) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_EXPRESS_API}/auth/register`, data, { withCredentials: true });
        console.log(response.data);
        return response.data; 
    } catch (err) {
        console.error(`Error in register function: ${err}`);
        throw err; 
    }
};