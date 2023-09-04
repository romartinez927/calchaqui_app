"use client"
import { useState, createContext, useContext } from "react"

const StateContext = createContext({
    accessToken: null,
    setUser: () => {},
    setAccessToken: () => {},
})

export const useAuth = () => useContext(StateContext);

export const AuthProvider = ({ children }) => {
    const [accessToken, _setAccessToken] = useState(localStorage.getItem('ACCESS_TOKEN'))
    const [user, setUser] = useState({})

    const logout = () => {
        localStorage.clear();
    }

    const setAccessToken = (token) => {
        _setAccessToken(token)
        if(token) {
            localStorage.setItem("ACCESS_TOKEN", token)
        } else {
            localStorage.removeItem("ACCESS_TOKEN")
        }
    }
    

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

    )
}

export const useStateContext = () => useContext(StateContext);