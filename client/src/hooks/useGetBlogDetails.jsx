import { useEffect, useState } from "react";
import { getBlogDetails } from "../dataService/blogService";

export default function useGetBlogDetails(blogId) {
    const [blog, setBlog] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        try {
            const getBlog = async () => {
                const response = await getBlogDetails(blogId);
                setBlog(response);
                setLoading(false);
            };
            getBlog();

        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }, [blogId]);

    return [blog, loading, error];

}