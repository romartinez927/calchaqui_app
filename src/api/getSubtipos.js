import { adaptarSubtipoDesdeApi } from "@/adapters/subtiposAdapter";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const GET_SUBTIPOS_MUESTRAS = process.env.NEXT_PUBLIC_GET_SUBTIPOS_MUESTRAS

export const getSubtipos = async (query = "") => {
    try {
        const url = query
        ? `${API_BASE_URL}/${GET_SUBTIPOS_MUESTRAS}?search=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/${GET_SUBTIPOS_MUESTRAS}`;
  
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Failed to fetch.');
      }
      
      const dataResponse = await response.json();
      const adaptedData = dataResponse.map(adaptarSubtipoDesdeApi);
      return adaptedData;
    } catch (error) {
      console.error('Error fetching:', error);
      return [];
    }
}