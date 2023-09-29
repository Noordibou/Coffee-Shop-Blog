import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      setLoading(true); // Set loading to true while fetching data
      const res = await axios.get("/auth/refetch", { withCredentials: true });
      setUser(res.data);
      setLoading(false); // Set loading to false after data is fetched
    } catch (err) {
      setError(err); // Set error state if there's an error
      setLoading(false); // Set loading to false in case of an error
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, loading, error }}>
      {children}
    </UserContext.Provider>
  );
}