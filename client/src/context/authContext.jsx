import React, { createContext, useEffect, useState } from "react";
import { getUserFromCookie, logoutUser } from "../dataService/authService";

const AuthContext = createContext();


export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [role, setRole] = useState(null);

    useEffect(() => {
        const checkUserAuth = async () => {
            setLoading(true); 
            try {
                const authenticatedUser = await getUserFromCookie();
                setUser(authenticatedUser || null);
            } catch (err) {
                console.error('Authentication failed:', err);
            } finally {
                setLoading(false);
            }
        };

        checkUserAuth();
    }, []);

    const logout = async () => {
        await logoutUser();
        setUser(null);
        localStorage.removeItem('user');
    };

    const initialState = {
        user,
        setUser,
        role,
        loading,
        logout,
    };

    return (
        <AuthContext.Provider value={initialState}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
