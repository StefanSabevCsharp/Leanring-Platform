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

export const login = async (values) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_EXPRESS_API}/auth/login`, values, { withCredentials: true });
        console.log(response);
        return response.data;
    } catch (err) {
        console.error(`Error in login function: ${err}`);
        throw err;
    }
}

export const logoutUser = async () => {
    try{
        const response = await axios.get(`${import.meta.env.VITE_EXPRESS_API}/auth/logout`, { withCredentials: true });
    }catch(err){
        console.error("Error in logout function", err);
        //todo : handle error
    }
}

export const getUserFromCookie = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_EXPRESS_API}/auth/checkAuth`, { withCredentials: true });
        return response.data;
    } catch (err) {
        // console.error("Error verifying token:", err);
        return null;
    }
};