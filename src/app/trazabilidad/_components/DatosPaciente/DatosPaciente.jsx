"use client"

import { getMuestra } from '@/api/getMuestra';
import React, { useEffect, useState } from 'react'

function DatosPaciente(props) {
    const [muestra, setMuestra] = useState([])

    useEffect(() => {
        // Llamada a la función getMuestras y manejo de los datos
        async function fetchData() {
          try {
            const adaptedData = await getMuestra(props.id);
            setMuestra(adaptedData);
            console.log(adaptedData)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, []);
    return (
        <div className="trazabilidad-container d-flex flex-wrap gap-2 justify-content-center mx-auto mt-3">
            <div className="card-trazabilidad">
                <img src="http://localhost/proyectos/calchaqui/template/img/hombre-720x174.png" alt="Foto Perfil" width="100%" />
                <div className="card-body text-center d-flex flex-column gap-2">
                    <h5>{muestra.paciente_id?.nombre}</h5>
                    <p>Dni: {muestra.paciente_id?.dni}</p>
                    <h5>Muestra Nro</h5>
                    <p>{muestra.id}</p>
                </div>
            </div>
            <div className="card-trazabilidad">
                <div className="border-blue"></div>
                <div className="card-body">
                    <div className="d-flex flex-column my-auto">
                        <h6>Tipo</h6>
                        <p>Anatomía Patológica</p>
                        <h6>Subtipo</h6>
                        <p>Congelación</p>
                        <h6>Cantidad de Frascos: {muestra.frascos}</h6>
                        <h6>ATB</h6>
                    </div>
                </div>
            </div>
            <div className="card-trazabilidad">
                <div className="border-blue"></div>
                <div className="card-body">
                    <div>
                        <h6>Médico Solicitante</h6>
                        <p>{muestra.medico}</p>
                        <h6>Preparador</h6>
                        <p>{muestra.preparador}</p>
                        <h6>Material Remitido</h6>
                        <p>{muestra.material}</p>
                        <h6>Localización</h6>
                        <p>{muestra.localizacion}</p>
                    </div>
                </div>
            </div>
            <div className="card-trazabilidad">
                <div className="border-blue"></div>
                <div className="card-body">
                    <div>
                        <h6>Observaciones</h6>
                        <p>{muestra.observaciones}</p>
                        <h6>Diagóstico Crítico Presuntivo</h6>
                        <p>{muestra.diagnostico}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DatosPaciente