import { useState, useEffect } from "react";

interface User {
    name: string;
    email: string;
    number: string;
    type: string;
    region_id: string | null;
    active: number;
}

export const useAuth = () => {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);

    // Load token and user data from localStorage when the hook is first used
    useEffect(() => {
        const storedToken = localStorage.getItem("authToken");
        const storedUser = localStorage.getItem("authUser");

        if (storedToken) {
            setToken(storedToken);
        }

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // Function to save token and user data
    const saveAuthData = (authToken: string, authUser: User) => {
        localStorage.setItem("authToken", authToken);
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setToken(authToken);
        setUser(authUser);
    };

    // Function to clear token and user data
    const clearAuthData = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("authUser");
        setToken(null);
        setUser(null);
    };

    return { token, user, saveAuthData, clearAuthData };
};
