import axios from "axios";
import { getErrorMessage } from "../utils/errorParser";


export const createComment = async (text, courseId, userId) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_EXPRESS_API}/comments/create`, { text, courseId, userId }, { withCredentials: true });
        return response.data;

    } catch (error) {
        console.log("Error in create comment function", error);
        return getErrorMessage(error);
    }
}