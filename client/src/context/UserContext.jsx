import axios from "axios";
import { createContext, useEffect, useState } from "react";
import URL from "../URL";

// Create an axios instance with common configurations
const axiosInstance = axios.create({
  baseURL: URL,
  withCredentials: true,
});

export const UserContext = createContext({
  user: null,
  setUser: () => {},
  error: null,
});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const res = await axiosInstance.get("/auth/refetch");
      setUser(res.data);
      setError(null); // Reset any previous errors
    } catch (err) {
      console.error(err);
      setError("An error occurred while fetching user data.");
    }
  };

  // Provide default values for the context
  const contextValue = {
    user,
    setUser,
    error,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
}
