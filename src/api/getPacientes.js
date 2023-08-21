import { adaptarPacienteDesdeApi } from "@/adapters/pacienteAdapter.js";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const GET_PACIENTES = process.env.NEXT_PUBLIC_GET_PACIENTES

export const getPacientes = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/${GET_PACIENTES}`);
  
      if (!response.ok) {
        throw new Error('Failed to fetch patients.');
      }
      
      const dataResponse = await response.json();
      const adaptedData = dataResponse.map(adaptarPacienteDesdeApi);
      return adaptedData;
    } catch (error) {
      console.error('Error fetching:', error);
      return [];
    }
}

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow'
// };

// fetch("http://127.0.0.1:8000/api/pacientes", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));