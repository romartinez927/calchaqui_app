"use client"
import { useState, createContext, useContext, useEffect } from "react";

const StateContext = createContext({
  accessToken: typeof window !== "undefined" ? window.localStorage.getItem('ACCESS_TOKEN') : null,
  setUser: () => {},
  setAccessToken: () => {},
});

export const useAuth = () => useContext(StateContext);

export const AuthProvider = ({ children }) => {
  const [accessToken, _setAccessToken] = useState(typeof window !== "undefined" ? window.localStorage.getItem('ACCESS_TOKEN') : null); // Inicializa en null

  useEffect(() => {
    // Verificar si estamos en el lado del cliente antes de acceder a localStorage
    if (typeof window !== "undefined") {
      const storedAccessToken = localStorage.getItem("ACCESS_TOKEN");
      _setAccessToken(storedAccessToken);
    }
  }, []); // No es necesario incluir dependencias aquí

  const [user, setUser] = useState({});

  const logout = () => {
    localStorage.clear();
  };

  const setAccessToken = (token) => {
    _setAccessToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };

  return (
    <StateContext.Provider
      value={{
        setAccessToken,
        accessToken,
        setUser,
        user,
        logout,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);