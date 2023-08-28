import { adaptarTrazabilidadMuestraDesdeApi } from "@/adapters/trazabilidadMuestraAdapter"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const GET_TRAZABILIDAD_MUESTRA = process.env.NEXT_PUBLIC_SET_TRAZABILIDAD_MUESTRA

export const getTrazabilidadDeMuestra = async (idMuestra) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${GET_TRAZABILIDAD_MUESTRA}/${idMuestra}`)
        if (!response.ok) {
            throw new Error("Fallo el fetch")
        }
        const trazabilidades = await response.json()
        const adaptedTrazabilidad = trazabilidades.map(adaptarTrazabilidadMuestraDesdeApi);
        return adaptedTrazabilidad
    } catch (error) {
        console.error("Error en el fetch", error)
        return []
    }
}