import { adaptarPacienteDesdeApi } from "@/adapters/pacienteAdapter.js";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const GET_PACIENTES = process.env.NEXT_PUBLIC_GET_PACIENTES

export const getPacientes = async () => {
    try {
        const url = `${API_BASE_URL}/${GET_PACIENTES}`
        const token = localStorage.getItem('ACCESS_TOKEN')

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: url,
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        };

        axios.request(config)
        const response = await axios.request(config);
        const data = response.data; // Aquí están los datos reales de la respuesta

        const adaptedData = data.map(adaptarPacienteDesdeApi);
        return adaptedData;
    } catch (error) {
        console.error('Error fetching:', error);
        return [];
    }
}