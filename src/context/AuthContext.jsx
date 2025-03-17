"use client";
import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const name = 'Mahbub';

    return (
        <AuthContext.Provider value={{ user, setUser, name }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom Hook
export const useAuth = () => {
    return useContext(AuthContext);
};