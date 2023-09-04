"use client"
import { apiLogin } from '@/api/login/apiLogin';
import React, { useState, useContext } from 'react'
import { useStateContext } from '@/context/ContextProvider';
import { useRouter } from 'next/navigation';
import { siteConfig } from '@/config/site';
import "./login.css"

function Login() {
    const router = useRouter();
    const { setAccessToken, setUser } = useStateContext()
    const [error, setError] = useState('');

    const [dataForm, setDataForm] = useState({
        email: '',
        password: '',
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
        <div className="d-flex justify-content-center align-items-center vh-100">
            <form onSubmit={handleSubmit} className='form-login'>
                <h2 className='mb-3'>Iniciar Sesión</h2>
                <div className='d-flex flex-column gap-1 mb-2 mt-4'>
                    <label htmlFor="email" >Usuario:</label>
                    <div className="input-group-login">
                        <span className="input-icon">
                            <i className="fa-solid fa-envelope"></i>
                        </span>
                        <input type="email" name="email" id="email" value={dataForm.email} onChange={handleChange} placeholder='usuario' autoComplete='true'/>
                    </div>
                    <span className="error-text">{error?.email}</span>
                </div>
                <div className='d-flex flex-column gap-1 mt-3 mb-2'>
                    <label htmlFor="password" >Contraseña:</label>
                    <div className="input-group-login">
                        <span className="input-icon">
                        <i className="fa-solid fa-lock"></i>
                        </span>
                        <input type="password" name="password" id="password" value={dataForm.password} onChange={handleChange} placeholder='********' />
                    </div>
                    <span className="error-text">{error?.password}</span>
                </div>
                <div><span className="error-text">{error?.credenciales}</span></div>
                <div className='mt-4'>
                    <button type="submit">Ingresar</button>
                </div>
            </form>
        </div>
    )
}

export default Login