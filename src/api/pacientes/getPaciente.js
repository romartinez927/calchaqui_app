import { adaptarPacienteDesdeApi } from "@/adapters/pacienteAdapter"
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const GET_PACIENTE = process.env.NEXT_PUBLIC_GET_PACIENTE

export const getPaciente = async (idPaciente) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${GET_PACIENTE}/${idPaciente}`)
        if (!response.ok) {
            throw new Error("Fallo el fetch a pacientes")
        }
        const paciente = await response.json()
        const adaptedPaciente = adaptarPacienteDesdeApi(paciente[0])
        return adaptedPaciente
    } catch (error) {
        console.error("Error en el fetch a pacientes", error)
        return []
    }
}