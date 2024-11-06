import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "./authContext";
import { getFullUserData } from "../dataService/authService";


export const DataContext = createContext();


export function DataProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            setLoading(true);
            const userId = user._id;
            try {
                const getUserData = async () => {
                    const fullUserData = await getFullUserData(userId);
                    setNewData(fullUserData);
                    setLoading(false);
                }
                getUserData();

            } catch (err) {
                setLoading(false);
            }
        }
    }, [user])

    const refreshData = () => {
        setRefresh(!refresh);
    }

    const setNewData = (data) => {
        setUserData(data);
    }

    const initialState = {
        userData,
        setNewData,
        loading,
        refreshData
    }

    return (
        <DataContext.Provider value={initialState}>
            {children}
        </DataContext.Provider>
    );
}