import React, { createContext, useEffect, useState } from "react";
import { getUserFromCookie, logoutUser } from "../dataService/authService";

const AuthContext = createContext();


export function AuthProvider({ children }) {
    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [role, setRole] = useState(null);

    useEffect(() => {
        async function checkUserAuth() {
            try {
                const authenticatedUser = await getUserFromCookie();
                if (authenticatedUser) {
                    setUser(authenticatedUser);
                }
            } catch (err) {
                console.error('Authentication failed:', err);
            }
        }

        checkUserAuth();
    }, []);

    const logout = async () => {
        await logoutUser();
        setUser(null);
        localStorage.removeItem('user');
    };

    const initialState = {
        isLogged,
        setIsLogged,
        user,
        setUser,
        loading,
        setLoading,
        role,
        setRole,
        logout,
    };

    return (
        <AuthContext.Provider value={initialState}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
