import React, { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const register = async (userData) => {
    const res = await axios.post("/api/auth/register", userData);
    setToken(res.data.token);
    localStorage.setItem("token", res.data.token);
  };

  const login = async (userData) => {
    const res = await axios.post("/api/auth/login", userData);
    setToken(res.data.token);
    localStorage.setItem("token", res.data.token);
  };

  const guestLogin = async () => {
    const res = await axios.get("/api/auth/guest");
    setToken(res.data.token);
    localStorage.setItem("token", res.data.token);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ user, token, register, login, guestLogin, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
