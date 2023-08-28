"use client"
import { useState, createContext, useEffect } from "react"
export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);
    const [user, setUser] = useState(null)

    function localStorageSet(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    const logout = () => {
        localStorage.clear();
    }

    useEffect(() => {
      if(!accessToken){
        localStorageSet('accessToken', accessToken)
      }
      if(!user){
        localStorageSet('user', user)
      }
    }, [accessToken, user])
    

    return (
        <AuthContext.Provider
            value={{
                setAccessToken,
                accessToken,
                setUser,
                user,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>

    )
}