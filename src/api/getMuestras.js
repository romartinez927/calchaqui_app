import { adaptarMuestraDesdeApi } from "@/adapters/muestraAdapter";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const GET_MUESTRAS = process.env.NEXT_PUBLIC_GET_MUESTRAS

export const getMuestras = async (query = "") => {
    try {
        const url = query
        ? `${API_BASE_URL}/${GET_MUESTRAS}?search=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/${GET_MUESTRAS}`;
  
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Failed to fetch.');
      }
      
      const dataResponse = await response.json();
      
      const adaptedData = dataResponse.map(adaptarMuestraDesdeApi);
      return adaptedData;
    } catch (error) {
      console.error('Error fetching:', error);
      return [];
    }
}