import React, { use, useEffect, useState } from "react";
import { createContext } from "react";
import API from "../apiInstance/axios";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await API.get("/user/profile");
        if(res.data.statusCode.data.role === "admin"){
          setAdmin(res.data.statusCode.data);
        }
      } catch (error) {
        console.error("Error fetching admin data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAdmin();
  }, []);
  
  return (
    <AuthContext.Provider value={{ admin, loading ,setAdmin}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
