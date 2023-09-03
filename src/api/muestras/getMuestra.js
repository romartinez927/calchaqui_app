import { adaptarMuestraDesdeApi } from "@/adapters/muestraAdapter"
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const GET_MUESTRA = process.env.NEXT_PUBLIC_GET_MUESTRA

export const getMuestra = async (idMuestra) => {
    try {
        
          
        const response = await fetch(`${API_BASE_URL}/${GET_MUESTRA}/${idMuestra}`)
        if (!response.ok) {
            throw new Error("Fallo el fetch a muestras")
        }
        const muestra = await response.json()
        const adaptedMuestra = adaptarMuestraDesdeApi(muestra.muestra)
        return adaptedMuestra
    } catch (error) {
        console.error("Error en el fetch a pacientes", error)
        return []
    }
}