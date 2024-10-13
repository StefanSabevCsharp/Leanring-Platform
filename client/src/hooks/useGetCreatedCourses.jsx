import { useEffect, useState } from "react";
import { getCreatedCourses } from "../dataService/courseService";


export default function useGetCreatedCourses(_id){
    const [createdCourses, setCreatedCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        const getCourses = async () => {
            try {
                const response = await getCreatedCourses(_id);
                setCreatedCourses(response.createdCourses);
                setLoading(false);
    
            } catch (error) {
                //TODO: handle error
                console.error("Error in get created courses function", error);
            }
        };
        getCourses();
    }, [_id]);
    return [createdCourses, loading];
}