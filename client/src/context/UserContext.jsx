import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({}); 

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        try {
            const res = await axios.get('https://coffee-shop-blog-server.vercel.app/auth/refetch', { withCredentials: true });
            setUser(res.data);
        } catch (err) {
            console.error("Error fetching user data:", err);
            console.error("Response data:", err.response?.data);
        }
    }

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}
