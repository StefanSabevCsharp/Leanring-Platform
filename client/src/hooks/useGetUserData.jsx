import { useEffect, useState } from "react";
import { getErrorMessage } from "../utils/errorParser";
import { getFullUserData } from "../dataService/authService";


export default function useGetUserData(userId) {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    //TODO : fix error handling

    useEffect(() => {
        setLoading(true);
        try{
            const getData = async () => {
                const response = await getFullUserData(userId);
                setUserData(response);
                setLoading(false);
            }
            getData();
        
        }catch(error){
            return getErrorMessage(error);
        }
        
    }, [userId]);

    return [userData, loading];
}