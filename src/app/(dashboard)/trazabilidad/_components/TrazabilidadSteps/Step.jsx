"use client"
import { useState, useEffect } from 'react';
import { formatDate } from '@/utils/dateUtils'
import "./TrazabilidadSteps.css"

function Step(props) {
    const { puntoDeControlId, puntoControlNombre, orden, trazabilidades } = props;
    const [trazabilidad, setTrazabilidad] = useState({
        fecha: '',
        hora: '',
        recibidoPor: '',
        entregadoPor: '',
    })
    console.log(trazabilidades.length)
    console.log(orden)

    useEffect(() => {
        setTrazabilidad(getTrazabilidad)
    }, [trazabilidades])

    const getTrazabilidad = () => {
        const resultadoBusqueda = trazabilidades?.find(trazabilidad => trazabilidad.puntoDeControlId === puntoDeControlId);
        return resultadoBusqueda;
    }

    return (
        <div className={orden > trazabilidades.length? "step-wizard-item current-item": "step-wizard-item"}>
            <span className="progress-count">{orden == trazabilidades.length+1? orden : ""}</span>
            <span className="progress-label">{puntoControlNombre}</span>
            <>
                <span className="progress-label">{trazabilidad?.fechaHora ? formatDate(trazabilidad?.fechaHora, "DD/MM/YYYY") : ''}</span>
                <span className="progress-label">{trazabilidad?.fechaHora ? `${formatDate(trazabilidad?.fechaHora, "hh:mm")} hs` : ''} </span>
                <span className="progress-label">
                    {
                        trazabilidad?.recibidoPor
                            ?
                            <>
                                {orden == 1 ? "Solicitó:" : "Entregó:"}
                                {trazabilidad?.recibidoPor ?? ""}
                            </>
                            :
                            ''
                    }
                </span>
                <span className="progress-label">
                    {
                        trazabilidad?.entregadoPor
                            ?
                            <>
                                {orden == 1 ? "Preparó:" : "Recibió:"}
                                {trazabilidad?.entregadoPor ?? ""}
                            </>
                            :
                            ''
                    }
                </span>
               
                <button className={trazabilidades.length + 1 == orden ? "btn btn-outline-primary" : "btn disabled btn-outline-primary"} data-bs-toggle="modal" data-bs-target="#exampleModal">
                    {trazabilidades.length + 1 > orden ? "Guardado" : "Guardar"}
                </button>
    
            </>
        </div>


    )
}

export default Step