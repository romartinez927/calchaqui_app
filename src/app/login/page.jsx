"use client"
import { apiLogin } from '@/api/apiLogin';
import React, { useState, useContext } from 'react'
import { AuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { siteConfig } from '@/config/site';

function Login() {
    const router = useRouter();
    const {setAccessToken, setUser} = useContext(AuthContext)
    const [error, setError] = useState('');

    const [dataForm, setDataForm] = useState({
        email: '',
        password:'',
        device_name: 'web',
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await apiLogin(dataForm)
            setAccessToken(response.token)
            setUser(response.user);
            router.push(siteConfig.links.muestras)
        } catch (error) {
            if (error.response && error.response.status === 422) {
                setError(error.response.data.errors)
            } else {
                alert('Something went wrong. Please try again later.')
            }
        }
    };
    const handleChange = (event) => {
        setError(null);
        const { name, value } = event.target;
        setDataForm({ ...dataForm, [name]: value });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" >Email:</label>
                    <input type="email" name="email" value={dataForm.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password" >Password:</label>
                    <input type="password" name="password" value={dataForm.password} onChange={handleChange} />
                </div>
                <div><span>{error?.email}</span></div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login