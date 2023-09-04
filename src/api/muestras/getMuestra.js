import { adaptarMuestraDesdeApi } from "@/adapters/muestraAdapter"
import axios from "axios"
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const GET_MUESTRA = process.env.NEXT_PUBLIC_GET_MUESTRA

export const getMuestra = async (idMuestra) => {
    try {
        const url = `${API_BASE_URL}/${GET_MUESTRA}/${idMuestra}`
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
        const muestra = response.data
        const adaptedMuestra = adaptarMuestraDesdeApi(muestra.muestra)
        return adaptedMuestra
    } catch (error) {
        console.error("Error en el fetch a pacientes", error)
        return []
    }
}