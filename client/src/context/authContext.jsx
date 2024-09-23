import React, { createContext, useState } from "react";

const AuthContext = createContext();


export function AuthProvider({ children }) {
    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const initialState = {
        isLogged,
        setIsLogged,
        user,
        setUser,
        loading,
        setLoading,
    };

    return (
        <AuthContext.Provider value={initialState}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
