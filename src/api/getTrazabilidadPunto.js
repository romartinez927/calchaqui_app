import { adaptarTrazabilidadDesdeApi } from "@/adapters/trazabilidadAdapter"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const GET_TRAZABILIDAD = process.env.NEXT_PUBLIC_GET_TRAZABILIDAD

export const getTrazabilidadPunto = async (idModel, idPunto) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${GET_TRAZABILIDAD}/${idModel}/${idPunto}`)
        if (!response.ok) {
            throw new Error("Fallo el fetch")
        }

        const trazabilidad = await response.json()
        const adaptedTrazabilidad = adaptarTrazabilidadDesdeApi(trazabilidad)

        return adaptedTrazabilidad
    } catch (error) {
        console.error("Error en el fetch", error)
        return []
    }
}