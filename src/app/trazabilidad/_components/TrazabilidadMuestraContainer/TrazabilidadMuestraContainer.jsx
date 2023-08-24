"use client"

import { getMuestra } from '@/api/getMuestra';
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
                const adaptedData = await getMuestra(props.id);
                setMuestra(adaptedData);
                console.log(adaptedData)
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <DatosMuestra muestra={muestra} isLoading={isLoading}/>
            <TrazabilidadSteps muestra={muestra} id={props.id}/>
        </div>
    )
}

export default TrazabilidadMuestraContainer