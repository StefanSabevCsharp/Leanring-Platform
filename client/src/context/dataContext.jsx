import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "./authContext";
import { getFullUserData } from "../dataService/authService";


export const DataContext = createContext();


export function DataProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null);
    const { user } = useContext(AuthContext);
    //TODO: probably add refresh toglle to refresh the data

    useEffect(() => {
        if (user) {
            setLoading(true);
            const userId = user._id;
            try {
                const getUserData = async () => {
                    const fullUserData = await getFullUserData(userId);
                    setNewData(fullUserData);
                    console.log(fullUserData);
                    setLoading(false);
                }
                getUserData();

            } catch (err) {
                //TODO : handle error correctly
                console.log(err);
                setLoading(false);
            }
        }
    }, [user])

    const setNewData = (data) => {
        setUserData(data);
    }

    const initialState = {
        userData,
        setNewData,
        loading
    }

    return (
        <DataContext.Provider value={initialState}>
            {children}
        </DataContext.Provider>
    );
}