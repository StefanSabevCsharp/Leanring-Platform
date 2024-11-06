import axios from "axios";
import { getErrorMessage } from "../utils/errorParser";

export const addCourseToWishList = async (courseId, userId) => {

    try{
        const response = await axios.post(`${import.meta.env.VITE_EXPRESS_API}/wishlist/add`, {courseId, userId }, { withCredentials: true });
        return response.data;

    }catch(error){
        const errorMessage = getErrorMessage(error);
        return new Error(errorMessage);
    }
};

export const removeCourseFromWishlist = async (courseId, userId) => {

    try{
        const response = await axios.post(`${import.meta.env.VITE_EXPRESS_API}/wishlist/remove`, {courseId, userId }, { withCredentials: true });
        return response.data;

    }catch(error){
        const errorMessage = getErrorMessage(error);
        return new Error(errorMessage);
    }
}

export const getWishListCourses = async (userId) => {
    try{
        const response = await axios.get(`${import.meta.env.VITE_EXPRESS_API}/wishlist/${userId}`, { withCredentials: true });
        return response.data;

    }catch(error){
        const errorMessage = getErrorMessage(error);
        return new Error(errorMessage);
    }
};