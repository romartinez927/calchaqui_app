import { adaptarPacienteDesdeApi } from "@/adapters/pacienteAdapter"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const GET_PACIENTE_POR_DNI = process.env.NEXT_PUBLIC_GET_PACIENTE_POR_DNI

export const getPacientePorDni = async (dniPaciente) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${GET_PACIENTE_POR_DNI}?dni=${dniPaciente}`)
        if (!response.ok) {
            throw new Error("Fallo el fetch a pacientes")
        }
        const paciente = await response.json()
        if (paciente.paciente.length == 0) {
            return []
        }
        const adaptedPaciente = adaptarPacienteDesdeApi(paciente.paciente[0])
        return adaptedPaciente
    } catch (error) {
        console.error("Error en el fetch a pacientes", error)
        return []
    }
}