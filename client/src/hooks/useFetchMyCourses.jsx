
import { useState, useEffect } from "react";
import { getCourseById } from "../dataService/courseService";
import { getErrorMessage } from "../utils/errorParser";

export default function useFetchCourses(courseIds) {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourses = async () => {
            setLoading(true);
            try {
                const fetchedCourses = await Promise.all(
                    courseIds.map(async (id) => {
                        try {
                            const response = await getCourseById(id);
                            return response.course;
                        } catch (err) {
                            console.error("Error fetching course:", getErrorMessage(err));
                            return null;
                        }
                    })
                );
                
                setCourses(fetchedCourses.filter(Boolean));
                setError(null);
            } catch (err) {
                setError(getErrorMessage(err));
                setCourses([]);
            } finally {
                setLoading(false);
            }
        };

        if (courseIds.length) {
            fetchCourses();
        } else {
            setLoading(false);
        }
    }, [courseIds]);

    return [ courses, loading, error ];
}
