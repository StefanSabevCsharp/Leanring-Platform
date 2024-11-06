import axios from "axios";
import { getErrorMessage } from "../utils/errorParser";


export const createComment = async (text, entityId, userId, entityType) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_EXPRESS_API}/comments/create`, { text, entityId, userId, entityType }, { withCredentials: true });
        return response.data;

    } catch (error) {
        return getErrorMessage(error);
    }
}