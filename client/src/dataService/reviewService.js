import axios from "axios";
import { getErrorMessage } from "../utils/errorParser";


export const createReview = async (reviewData, courseId, userId) => {

    try{
        const response = await axios.post(`${import.meta.env.VITE_EXPRESS_API}/reviews/create`, { reviewData, courseId, userId }, { withCredentials: true });
        return response.data;

    }catch(error){
        console.error("Error in create review function", error);
        const errorMessage = getErrorMessage(error);
        throw new Error(errorMessage);
    }

};