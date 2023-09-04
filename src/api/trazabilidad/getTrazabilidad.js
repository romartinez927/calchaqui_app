import { adaptarTrazabilidadDesdeApi } from "@/adapters/trazabilidadAdapter"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const GET_TRAZABILIDAD = process.env.NEXT_PUBLIC_GET_TRAZABILIDAD

export const getTrazabilidad = async (id) => {
    try {
        const url = `${API_BASE_URL}/${GET_TRAZABILIDAD}/${id}`
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
        const trazabilidad = response.data
        const adaptedTrazabilidad = adaptarTrazabilidadDesdeApi(trazabilidad)
        return adaptedTrazabilidad
    } catch (error) {
        console.error("Error en el fetch", error)
        return []
    }
}