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

export const getPersonalReviews = async (userId) => {

    try{
        const response = await axios.get(`${import.meta.env.VITE_EXPRESS_API}/reviews/personal/${userId}`, { withCredentials: true });
        return response.data;

    }catch(error){
        console.error("Error in get personal reviews function", error);
        const errorMessage = getErrorMessage(error);
        throw new Error(errorMessage);
    }

}

export const deleteReview = async (reviewId) => {
    
        try{
            const response = await axios.delete(`${import.meta.env.VITE_EXPRESS_API}/reviews/delete/${reviewId}`, { withCredentials: true });
            return response.data;
    
        }catch(error){
            console.error("Error in delete review function", error);
            const errorMessage = getErrorMessage(error);
            throw new Error(errorMessage);
        }
};