import { adaptarTrazabilidadParaApi } from "@/adapters/trazabilidadAdapter"
import axios from "axios"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const SET_TRAZABILIDAD = process.env.NEXT_PUBLIC_SET_TRAZABILIDAD

export const postTrazabilidad = async (formData) => {
    try {
        const dataParaApi = adaptarTrazabilidadParaApi(formData)
        const response = await axios.post(`${API_BASE_URL}/${SET_TRAZABILIDAD}`, dataParaApi)
        return response
    } catch (error) {
        console.error("Error al crear trazabilidad", error)
        throw error
    }
}