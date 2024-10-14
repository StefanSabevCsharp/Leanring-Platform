import { useEffect, useState } from "react";
import { getErrorMessage } from "../utils/errorParser";
import { getPersonalReviews } from "../dataService/reviewService";

export default function useGetReviews(userId, refresh) {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        const fetchReviews = async () => {
            try {
                const response = await getPersonalReviews(userId);
                setReviews(response);
                setLoading(false);
            } catch (error) {
                const errorMessage = getErrorMessage(error);
                return errorMessage;
            }
        }
        fetchReviews();
    },[userId,refresh]);

    return [reviews ,loading];
}