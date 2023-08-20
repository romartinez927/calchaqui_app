import { adaptarMuestraParaApi } from "@/adapters/muestraAdapter"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const NUEVA_MUESTRA = process.env.NEXT_PUBLIC_SET_MUESTRA

export const postMuestra = async (formData) => {
    try {
        const dataParaApi = adaptarMuestraParaApi(formData)
        const response = await fetch(`${API_BASE_URL}/${NUEVA_MUESTRA}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataParaApi),

        })

        if (!response.ok) {
            throw new Error("Fallo fetch de la muestra")
        }

        return response
    } catch (error) {
        console.error("Error al crear nueva muestra", error)
        throw error
    }
}