import { adaptarPuntoDeControlDesdeApi } from "@/adapters/puntoDeControlAdapter";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const GET_PUNTOS_DE_CONTROL = process.env.NEXT_PUBLIC_GET_PUNTOS_DE_CONTROL

export const getPuntosDeControl = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/${GET_PUNTOS_DE_CONTROL}`);
        if (!response.ok) {
            throw new Error('Failed to fetch.');
        }
        const dataResponse = await response.json();
        const adaptedData = dataResponse.map(adaptarPuntoDeControlDesdeApi);
        return adaptedData;
    } catch (error) {
        console.error('Error fetching:', error);
        return [];
    }
}