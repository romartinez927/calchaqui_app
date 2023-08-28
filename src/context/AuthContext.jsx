"use client"

import { useState, createContext, useEffect } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState("")
    const [user, setUser] = useState({
        email: '',
        password: '',
        device_name: "web"
    })

    function localStorageSet(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    localStorageSet('user', user);
    localStorageSet('access-token', accessToken);
    

    const logout = () => {
        setUser(null)
        setAccessToken(null)
    }

    return (
        <AuthContext.Provider
            value={{
                accessToken,
                setAccessToken,
                setUser,
                user,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>

    )
}