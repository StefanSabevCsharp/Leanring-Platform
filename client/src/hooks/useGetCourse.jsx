import { useEffect, useState } from "react";
import { getCourseById } from "../dataService/courseService";
import { getErrorMessage } from "../utils/errorParser";

export default function useGetCourse(courseId) {
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCourse = async () => {
            try {
                setLoading(true); 
                const response = await getCourseById(courseId);
                setCourse(response.course);
                setError(null); 
            } catch (error) {
                const errorMessage = getErrorMessage(error); 
                console.error("Error fetching course:", errorMessage);
                setError(errorMessage);
            } finally {
                setLoading(false);
            }
        };

        if (courseId) {
            getCourse();
        }
    }, [courseId]);

    return [course, loading, error];
}
