import axios from 'axios';
import { getErrorMessage } from '../utils/errorParser';

export const register = async (data) => {
try {
    const response = await axios.post(`${import.meta.env.VITE_EXPRESS_API}/auth/register`, data, { withCredentials: true });
    return response.data; 
} catch (err) {
    console.error(`Error in register function: ${err}`);
    const errorMessage = getErrorMessage(err);
    throw new Error(errorMessage);
}
};

export const login = async ( values ) => {
try {
    const response = await axios.post(`${import.meta.env.VITE_EXPRESS_API}/auth/login`, values, { withCredentials: true });
    console.log(response);
    return response.data;
} catch (err) {
    console.error(`Error in login function: ${err}`);
    throw err;
}
} 