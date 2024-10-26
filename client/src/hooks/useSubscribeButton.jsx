import { useState, useContext } from "react";
import toast from "react-hot-toast";
import { DataContext } from "../context/dataContext";
import { getErrorMessage } from "../utils/errorParser";
import { subscribeToCourse, unsubscribeFromCourse } from "../dataService/courseService";

export const useSubscribeButton = (courseId) => {
    const { userData } = useContext(DataContext);
    const [isSubscribing, setIsSubscribing] = useState(false);

    const handleSubscribe = async (currentlySubscribed) => {
        setIsSubscribing(true);
        try {
            if (!currentlySubscribed) {
                const response = await subscribeToCourse(courseId, userData._id);
                userData.courses.push(courseId);
                toast.success(response.message);
                return true; 
            } else {
                const response = await unsubscribeFromCourse(courseId, userData._id);
                userData.courses = userData.courses.filter(course => course !== courseId);
                toast.success("Unsubscribed successfully.");
                return false; 
            }
        } catch (error) {
            toast.error(getErrorMessage(error));
            return currentlySubscribed;
        } finally {
            setIsSubscribing(false);
        }
    };

    return [handleSubscribe, isSubscribing];
};
