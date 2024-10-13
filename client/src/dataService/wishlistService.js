import axios from "axios";
import { getErrorMessage } from "../utils/errorParser";

export const addCourseToWishList = async (courseId, userId) => {

    try{
        const response = await axios.post(`${import.meta.env.VITE_EXPRESS_API}/wishlist/add`, {courseId, userId }, { withCredentials: true });
        return response.data;

    }catch(error){
        const errorMessage = getErrorMessage(error);
        console.log(errorMessage);
        return new Error(errorMessage);
    }
};

