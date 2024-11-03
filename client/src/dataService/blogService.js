import axios from "axios";
import { getErrorMessage } from "../utils/errorParser";

export const createBlog = async (values, userId) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_EXPRESS_API}/blog/create`, { values, userId }, { withCredentials: true });
        return response.data;

    } catch (error) {
        console.error("Error in create blog function", error);
        const errorMessage = getErrorMessage(error);
        throw new Error(errorMessage);
    }
}