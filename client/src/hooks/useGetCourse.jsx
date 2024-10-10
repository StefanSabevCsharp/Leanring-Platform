import { useEffect, useState } from "react";
import { getErrorMessage } from "../utils/errorParser";
import { getCourseById } from "../dataService/courseService";


export default function useGetCourse(courseId) {
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    //TODO : fix error handling

    useEffect(() => {
        setLoading(true);
        try{
            const getCourse = async () => {
                const response = await getCourseById(courseId);
                setCourse(response.course);
                setLoading(false);
            }
            getCourse();
        
        }catch(error){
            console.log("Error in get course function", error);
            return getErrorMessage(error);
        }
        
    }, [courseId]);

    return [course, loading];
}