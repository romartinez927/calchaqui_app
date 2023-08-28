"use client"

import { apiLogin } from '@/api/apiLogin';
import React, { useState, useContext } from 'react'
import {AuthContext} from "../../context/AuthContext"

function Login() {
    const {setAccessToken, setUser, user} = useContext(AuthContext)
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await apiLogin(user)
            setAccessToken(response.token)
            
        } catch (error) {
            setError('Invalid credentials. Please try again.')
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" >Email:</label>
                    <input type="email" name="email" value={user.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password" >Password:</label>
                    <input type="password" name="password" value={user.password} onChange={handleChange} />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login