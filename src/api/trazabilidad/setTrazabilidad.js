import { adaptarTrazabilidadParaApi } from "@/adapters/trazabilidadAdapter"
import axios from "axios"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const SET_TRAZABILIDAD = process.env.NEXT_PUBLIC_SET_TRAZABILIDAD

export const postTrazabilidad = async (formData) => {
    try {
        const dataParaApi = adaptarTrazabilidadParaApi(formData)
        const url = `${API_BASE_URL}/${SET_TRAZABILIDAD}`
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
        console.error("Error al crear trazabilidad", error)
        throw error
    }
}