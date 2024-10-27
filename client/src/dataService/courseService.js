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

export const getAllCourses = async (limit) => {
    
        try{
            const response = await axios.get(`${import.meta.env.VITE_EXPRESS_API}/courses?limit=${limit}`, { withCredentials: true });
            return response.data;
    
        }catch(error){
            console.error("Error in get all courses function", error);
            const errorMessage = getErrorMessage(error);
            throw new Error(errorMessage);
        }
};

export const deleteCourseById = async (courseId) => {
    try {
        const response = await axios.delete(`${import.meta.env.VITE_EXPRESS_API}/courses/${courseId}`, { withCredentials: true });
        return response.data;
        
    } catch (error) {
        console.error("Error in delete course function", error);
        const errorMessage = getErrorMessage(error);
        throw new Error(errorMessage);
    }
}
export const updateCourse = async (courseData, courseId, userId) => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_EXPRESS_API}/courses/${courseId}`, { courseData, userId }, { withCredentials: true });
        return response.data;
        
    } catch (error) {
        console.error("Error in update course function", error);
        const errorMessage = getErrorMessage(error);
        throw new Error(errorMessage);
    }
}

export const subscribeToCourse = async (courseId, userId) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_EXPRESS_API}/courses/subscribe`, { courseId, userId }, { withCredentials: true });
        return response.data;
        
    } catch (error) {
        console.error("Error in subscribe to course function", error);
        const errorMessage = getErrorMessage(error);
        throw new Error(errorMessage);
    }
}
export const unsubscribeFromCourse = async (courseId, userId) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_EXPRESS_API}/courses/unsubscribe`, { courseId, userId }, { withCredentials: true });
        return response.data;
        
    } catch (error) {
        console.error("Error in unsubscribe from course function", error);
        const errorMessage = getErrorMessage(error);
        throw new Error(errorMessage);
    }
}