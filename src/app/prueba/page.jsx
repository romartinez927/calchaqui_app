"use client"

import { getPacientes } from "@/api/getPacientes";
import { useEffect, useState } from "react";

export default function AltaMuestras() {
  const [pacientes, setPacientes] = useState([])

    useEffect(() => {
        // Llamada a la función getMuestras y manejo de los datos
        async function fetchData() {
          try {
            const query = ''; // Puedes ajustar la búsqueda si es necesario
            const adaptedData = await getPacientes(query);
            setPacientes(adaptedData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, []);

  return (
    <div>
       <ul>
        {pacientes.map(paciente => (
          <li key={paciente.id}>{paciente.muestras}</li>
        ))}
      </ul>
    </div>
  )
}
