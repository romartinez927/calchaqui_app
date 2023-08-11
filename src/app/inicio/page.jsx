"use client"

import { useState } from "react";

export default function Inicio() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [dni, setDni] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const data = {
        nombre,
        apellido,
        dni
      };

      try {
        const response = await fetch('http://127.0.0.1:8000/api/pacientes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
    
        if (response.ok) {
          // El paciente se agregó correctamente
        } else {
          // Ocurrió un error al agregar el paciente
        }
      } catch (error) {
        console.error('Error al enviar la solicitud:', error);
      }
    }

    return (
        <div>
            <h1>Datos Paciente</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                />

                <label htmlFor="apellido">Apellido:</label>
                <input
                type="text"
                id="apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                />

                <label htmlFor="dni">Dni</label>
                <input
                type="number"
                id="dni"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
                />

                {/* Agrega más campos según tus necesidades */}

                <button type="submit">Agregar Paciente</button>
            </form>
            </div>
    )
}
