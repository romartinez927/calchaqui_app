import { adaptarPacienteDesdeApi } from "@/adapters/pacienteAdapter.js";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const GET_PACIENTES = process.env.NEXT_PUBLIC_GET_PACIENTES

export const getPacientes = async (query = "") => {
    try {
        const url = query
        ? `${API_BASE_URL}/${GET_PACIENTES}?search=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/${GET_PACIENTES}`;
  
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Failed to fetch patients.');
      }
      
      const dataResponse = await response.json();
      const adaptedData = dataResponse.map(adaptarPacienteDesdeApi);
      return adaptedData;
    } catch (error) {
      console.error('Error fetching:', error);
      return [];
    }
}