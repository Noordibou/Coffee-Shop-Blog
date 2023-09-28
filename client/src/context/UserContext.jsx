import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({}); 

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);

    
    const getUser = async () => {
        try {
            const res = await axios.get('/auth/refetch', { withCredentials: true });
            setUser(res.data);
        } catch (err) {
            console.error("Error fetching user data:", err);
            console.error("Response data:", err.response?.data);
        }
    }
    useEffect(() => {
        getUser();
    }, []);
    
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}
