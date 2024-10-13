import { useEffect, useState } from "react";
import { getAllCourses } from "../dataService/courseService";


export const useGetAllCourses = (limit) => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            try {
                const response = await getAllCourses(limit);
                setCourses(response);
                setLoading(false);
            } catch (error) {
                console.error("Error in get all courses function", error);
                setError(error);
            }
        }
        getData();
    }, []);

    return [courses, loading, error];
}