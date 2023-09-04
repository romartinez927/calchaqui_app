import { adaptarMuestraParaApi } from "@/adapters/muestraAdapter"
import axios from "axios"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const NUEVA_MUESTRA = process.env.NEXT_PUBLIC_SET_MUESTRA

export const postMuestra = async (formData) => {
    try {
        const dataParaApi = adaptarMuestraParaApi(formData)
        const url = `${API_BASE_URL}/${NUEVA_MUESTRA}`
        const token = localStorage.getItem('ACCESS_TOKEN')

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: url,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            data: dataParaApi
        };

        const response = await axios.request(config)
        return response
    } catch (error) {
        console.error("Error al crear nueva muestra", error)
        throw error
    }
}