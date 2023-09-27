import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({}); // Remove the default export

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        try {
            const res = await axios.get('http://localhost:3001/auth/refetch'  , { withCredentials: true });
            setUser(res.data);  
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}
