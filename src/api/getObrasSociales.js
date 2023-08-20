import { adaptarObraSocialDesdeApi } from "@/adapters/obraSocialAdapter";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const GET_OBRAS_SOCIALES = process.env.NEXT_PUBLIC_GET_OBRAS_SOCIALES

export const getObrasSociales = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/${GET_OBRAS_SOCIALES}`);

        if (!response.ok) {
            throw new Error('Failed to fetch.');
        }
        const dataResponse = await response.json();
        const adaptedData = dataResponse.map(adaptarObraSocialDesdeApi);
        return adaptedData;
    } catch (error) {
        console.error('Error fetching:', error);
        return [];
    }
}