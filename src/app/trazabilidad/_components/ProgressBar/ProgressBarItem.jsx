"use client"

import { getTrazabilidadPunto } from '@/api/getTrazabilidadPunto';
import { formatDate } from '@/utils/dateUtils'
import React, { useEffect, useState } from 'react'

function ProgressBarItem(props) {
    const [trazabilidad, setTrazabilidad] = useState([])

    
    useEffect(() => {
        async function fetchData() {
            try {
                const adaptedData = await getTrazabilidadPunto(props.id, props.count);
                setTrazabilidad(adaptedData);
                console.log(adaptedData)
               
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);
    return (
        <div className={props.currentItem ? "step-wizard-item current-item" : "step-wizard-item"}>
            <span className="progress-count">{props.count}</span>
            <span className="progress-label">{props.puntoControl}</span>
            <span className="progress-label">{props.puntoGeneracion}</span>
            {
                props.currentItem ? 
                <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Guardar</button>
                : <button className="btn disabled btn-outline-primary">{props.buttonTxt}</button>
            }
            <span className="progress-label">{formatDate(trazabilidad?.fecha, "DD/MM/YYYY")}</span>
            <span className="progress-label">{formatDate(trazabilidad?.fecha, "hh:mm")} hs</span>
            <span className="progress-label">Solicitó: {trazabilidad?.recibido_por}</span>
            <span className="progress-label">Preparó: {trazabilidad?.entregado_por}</span>
        </div>
    )
}

export default ProgressBarItem