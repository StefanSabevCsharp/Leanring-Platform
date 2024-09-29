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
        const errorMessage = getErrorMessage(err);
        throw new Error(errorMessage);
    }
}

export const logoutUser = async () => {
    try{
        const response = await axios.get(`${import.meta.env.VITE_EXPRESS_API}/auth/logout`, { withCredentials: true });
        console.log(response);
    }catch(err){
        console.error("Error in logout function", err);
        //todo : handle error
        const errorMessage = getErrorMessage(err);
        throw new Error(errorMessage);
    }
}

export const updateUserProfile = async (values) => {
    try{
        const response = await axios.put(`${import.meta.env.VITE_EXPRESS_API}/auth/updateProfile`, values, { withCredentials: true });
        return response.data;
    }catch(err){
        console.error("Error in update profile function", err);
        const errorMessage = getErrorMessage(err);
        throw new Error(errorMessage);
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