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
        return response.data;
    } catch (err) {
        console.error(`Error in login function: ${err}`);
        const errorMessage = getErrorMessage(err);
        throw new Error(errorMessage);
    }
}

export const logoutUser = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_EXPRESS_API}/auth/logout`, { withCredentials: true });
        console.log(response);
    } catch (err) {
        console.error("Error in logout function", err);
        const errorMessage = getErrorMessage(err);
        throw new Error(errorMessage);
    }
}

export const updateUserProfile = async (values) => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_EXPRESS_API}/auth/updateProfile`, values, { withCredentials: true });
        return response.data;
    } catch (err) {
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

export const updateUserPassword = async (values) => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_EXPRESS_API}/auth/updatePassword/${values._id}`, values, { withCredentials: true });
        return response.data;
    } catch (err) {
        console.error("Error in get password function", err);
        const errorMessage = getErrorMessage(err);
        throw new Error(errorMessage);
    }
}

export const checkIsPasswordValid = async (password) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_EXPRESS_API}/auth/checkPassword`, { password }, { withCredentials: true });
        return response.data;

    } catch (err) {
        console.error("Error in check password function", err);
        const errorMessage = getErrorMessage(err);
        throw new Error(errorMessage);
    }
}

export const updateUserToBecomeInstructor = async (_id) => {
    try {
        const response = await axios.put(
            `${import.meta.env.VITE_EXPRESS_API}/auth/updateToInstructor/${_id}`, 
            {},
            { withCredentials: true } 
        );
        return response.data;
    } catch (err) {
        console.error("Error in update to instructor function", err);
        const errorMessage = getErrorMessage(err);
        throw new Error(errorMessage);
    }
};

export const getFullUserData = async (_id) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_EXPRESS_API}/auth/getFullUserData/${_id}`, { withCredentials: true });
        return response.data;
    } catch (err) {
        console.error("Error in get full user data function", err);
        const errorMessage = getErrorMessage(err);
        throw new Error(errorMessage);
    }
}

