import { adaptarTrazabilidadMuestraDesdeApi } from "@/adapters/trazabilidadMuestraAdapter"
import axios from "axios"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const GET_TRAZABILIDAD_MUESTRA = process.env.NEXT_PUBLIC_SET_TRAZABILIDAD_MUESTRA

export const getTrazabilidadDeMuestra = async (idMuestra) => {
    try {
        const url = `${API_BASE_URL}/${GET_TRAZABILIDAD_MUESTRA}/${idMuestra}`
        const token = localStorage.getItem('ACCESS_TOKEN');

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: url,
            headers: { 
                'Authorization': `Bearer ${token}`
            }
          };

          const response = await axios.request(config)
          const trazabilidades = response.data

        const adaptedTrazabilidad = trazabilidades.map(adaptarTrazabilidadMuestraDesdeApi);
        return adaptedTrazabilidad
    } catch (error) {
        console.error("Error en el fetch", error)
        return []
    }
}