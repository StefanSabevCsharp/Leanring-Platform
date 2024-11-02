import { useEffect, useState } from "react";
import { getAllCourses } from "../dataService/courseService";


export const useGetAllCourses = (limit,category) => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            try {
                const response = await getAllCourses(limit,category);
                setCourses(response);
                setLoading(false);
            } catch (error) {
                console.error("Error in get all courses function", error);
                setError(error);
            }
        }
        getData();
    }, [category, limit]);

    return [courses, loading, error];
}