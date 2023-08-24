"use client"

import { getTrazabilidadPunto } from '@/api/getTrazabilidadPunto';
import { formatDate } from '@/utils/dateUtils'
import React, { useEffect, useState } from 'react'

function ProgressBarItem(props) {
    const [trazabilidad, setTrazabilidad] = useState([])
    const [step, setStep] = useState(props.currentItem);

    useEffect(() => {
        if (step >= props.id) {
            async function fetchData() {
                try {
                    const adaptedData = await getTrazabilidadPunto(props.idMuestra, props.id);
                    setTrazabilidad(adaptedData);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
            fetchData();
        }
    }, [step, props.id])

    return (
        <div className={step == props.id ? "step-wizard-item current-item" : "step-wizard-item"}>
            <span className="progress-count">{props.puntoOrden}</span>
            <span className="progress-label">{props.puntoControlNombre}</span>
            <span className="progress-label">{props.puntoGeneracion}</span>
            {
                step == props.id - 1 ?
                    <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Guardar</button>
                    : <button className="btn disabled btn-outline-primary">Guardado</button>
            }
            {
                step >= props.id ?
                    <>
                        <span className="progress-label">{formatDate(trazabilidad?.fecha, "DD/MM/YYYY")}</span>
                        <span className="progress-label">{formatDate(trazabilidad?.fecha, "hh:mm")} hs</span>
                        <span className="progress-label">{props.id == 1 ? "Solicitó:" : "Entregó"} {trazabilidad?.recibido_por}</span>
                        <span className="progress-label">{props.id == 1 ? "Preparó:" : "Recibió"} {trazabilidad?.entregado_por}</span>
                    </>
                    : <></>
            }

        </div>
    )
}

export default ProgressBarItem