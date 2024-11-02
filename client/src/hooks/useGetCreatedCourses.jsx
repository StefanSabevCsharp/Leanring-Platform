import { useEffect, useState } from "react";
import { getCreatedCourses } from "../dataService/courseService";
import toast from "react-hot-toast";


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
                toast.error("Error getting created courses");
                
            }
        };
        getCourses();
    }, [_id]);
    return [createdCourses, loading];
}