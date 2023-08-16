import { adaptarTipoDesdeApi } from "@/adapters/tiposAdapter";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const GET_TIPOS_MUESTRAS = process.env.NEXT_PUBLIC_GET_TIPOS_MUESTRAS

export const getTipos = async (query = "") => {
    try {
        const url = query
        ? `${API_BASE_URL}/${GET_TIPOS_MUESTRAS}?search=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/${GET_TIPOS_MUESTRAS}`;
  
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Failed to fetch.');
      }
      
      const dataResponse = await response.json();
      const adaptedData = dataResponse.map(adaptarTipoDesdeApi);
      return adaptedData;
    } catch (error) {
      console.error('Error fetching:', error);
      return [];
    }
}