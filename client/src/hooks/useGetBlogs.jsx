import { useEffect, useState } from "react";
import { getBlogs } from "../dataService/blogService";

export default function useGetBlogs(limit) {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const getAllBlogs = async () => {
                    const {blogs} = await getBlogs(limit);
                   
                    setBlogs(blogs);
                    setLoading(false);
                }
                getAllBlogs();
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };

        fetchBlogs();
    }, [limit]);

    return [blogs, loading, error];
    
}