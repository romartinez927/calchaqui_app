import { adaptarServicioDesdeApi } from "@/adapters/serviciosAdapter";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const GET_SERVICIOS = process.env.NEXT_PUBLIC_GET_SERVICIOS

export const getServicios = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/${GET_SERVICIOS}`);
        if (!response.ok) {
            throw new Error('Failed to fetch.');
        }
        const dataResponse = await response.json();
        const adaptedData = dataResponse.map(adaptarServicioDesdeApi);
        return adaptedData;
    } catch (error) {
        console.error('Error fetching:', error);
        return [];
    }
}