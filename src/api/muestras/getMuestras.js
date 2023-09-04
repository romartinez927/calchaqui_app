import { adaptarMuestraDesdeApi } from "@/adapters/muestraAdapter";
import axios from "axios";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const GET_MUESTRAS = process.env.NEXT_PUBLIC_GET_MUESTRAS

export const getMuestras = async () => {
    try {
        const url = `${API_BASE_URL}/${GET_MUESTRAS}`;
        const token = localStorage.getItem('ACCESS_TOKEN');

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: url,
            headers: { 
              'Accept': 'application/json', 
              'Authorization': `Bearer ${token}`
            }
          };
          
        axios.request(config)

        const response = await axios.request(config);
        const data = response.data; // Aquí están los datos reales de la respuesta

        const adaptedData = data.map(adaptarMuestraDesdeApi);
        return adaptedData 
    } catch (error) {
        console.error('Error fetching:', error);
        return [];
    }
}