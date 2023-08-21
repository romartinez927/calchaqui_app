import { adaptarMuestraParaApi } from "@/adapters/muestraAdapter"
import axios from "axios"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const NUEVA_MUESTRA = process.env.NEXT_PUBLIC_SET_MUESTRA
const APP_BASE_URL = process.env.NEXT_PUBLIC_APP_BASE_URL
const GET_MUESTRAS = process.env.NEXT_PUBLIC_GET_MUESTRAS

export const postMuestra = async (formData) => {
    try {
        const dataParaApi = adaptarMuestraParaApi(formData)
        const response = await axios.post(`${API_BASE_URL}/${NUEVA_MUESTRA}`, dataParaApi)

        window.location.href = `${APP_BASE_URL}/${GET_MUESTRAS}`;
        console.log(response)
        return response
    } catch (error) {
        console.error("Error al crear nueva muestra", error)
        throw error
    }
}