
import { useState, useContext } from "react";
import toast from "react-hot-toast";
import { DataContext } from "../context/dataContext";
import { getErrorMessage } from "../utils/errorParser";
import { subscribeToCourse } from "../dataService/courseService";

export const useSubscribeButton = (courseId) => {
    const { userData } = useContext(DataContext);
    const [isSubscribing, setIsSubscribing] = useState(false);

    const handleSubscribe = async () => {
        setIsSubscribing(true);
        try {
            const response = await subscribeToCourse(courseId, userData._id);
            userData.courses.push(courseId);  
            toast.success(response.message);
        } catch (error) {
            toast.error(getErrorMessage(error));
        } finally {
            setIsSubscribing(false);
        }
    };

    return [ handleSubscribe, isSubscribing ];
};
