import axios from 'axios';
import { getErrorMessage } from '../utils/errorParser';

export const createCourse = async (courseData, userId) => {

    try {
        const response = await axios.post(`${import.meta.env.VITE_EXPRESS_API}/courses/create`, { courseData, userId }, { withCredentials: true });
        return response.data;

    } catch (error) {
        console.error("Error in create course function", error);
        const errorMessage = getErrorMessage(error);
        throw new Error(errorMessage);
    }
}

export const getCreatedCourses = async (userId) => {

    try{
        const response = await axios.get(`${import.meta.env.VITE_EXPRESS_API}/courses/created/${userId}`, { withCredentials: true });
        return response.data;

    }catch(error){
        console.error("Error in get created courses function", error);
        const errorMessage = getErrorMessage(error);
        throw new Error(errorMessage);
        
    }

}

export const getCourseById = async (courseId) => {
    
        try{
            const response = await axios.get(`${import.meta.env.VITE_EXPRESS_API}/courses/${courseId}`, { withCredentials: true });
            return response.data;
    
        }catch(error){
            console.error("Error in get course by id function", error);
            const errorMessage = getErrorMessage(error);
            throw new Error(errorMessage);
        }
}