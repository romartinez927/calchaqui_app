"use client"

import { getMuestra } from '@/api/muestras/getMuestra';
import React, { useEffect, useState } from 'react'
import "../DatosMuestra/datosMuestra.css"
import DatosMuestra from '../DatosMuestra/DatosMuestra';
import TrazabilidadSteps from '../TrazabilidadSteps/TrazabilidadSteps';

function TrazabilidadMuestraContainer(props) {
    const [muestra, setMuestra] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Llamada a la función getMuestras y manejo de los datos
        async function fetchData() {
            try {
                const adaptedData = await getMuestra(props.idMuestra);
                setMuestra(adaptedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false)
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <DatosMuestra muestra={muestra} isLoading={isLoading}/>
            <TrazabilidadSteps idMuestra={props.idMuestra}/>
        </div>
    )
}

export default TrazabilidadMuestraContainer