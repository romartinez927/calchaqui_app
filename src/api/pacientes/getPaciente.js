import { adaptarPacienteDesdeApi } from "@/adapters/pacienteAdapter"
import axios from "axios"
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const GET_PACIENTE = process.env.NEXT_PUBLIC_GET_PACIENTE

export const getPaciente = async (idPaciente) => {
    try {
        const token = localStorage.getItem('ACCESS_TOKEN')
        const url = `${API_BASE_URL}/${GET_PACIENTE}/${idPaciente}`

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: url,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        const response = await axios.request(config)
        const paciente = response.data

        const adaptedPaciente = adaptarPacienteDesdeApi(paciente[0])
        return adaptedPaciente
    } catch (error) {
        console.error("Error en el fetch a pacientes", error)
        return []
    }
}