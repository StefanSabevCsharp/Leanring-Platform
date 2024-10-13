import { useEffect, useState } from "react";
import { getWishListCourses } from "../dataService/wishlistService";

export default function useGetWishlist(userId) {
    const [wishlist, setWishlist] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                const response = await getWishListCourses(userId);
                setWishlist(response);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchWishlist();
    }, [userId]);

    return [wishlist, isLoading, error];
}