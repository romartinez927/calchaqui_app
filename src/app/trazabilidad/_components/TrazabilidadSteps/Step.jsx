"use client"
import { useState, useEffect } from 'react';
import { formatDate } from '@/utils/dateUtils'

function Step(props) {
    const [trazabilidad, setTrazabilidad] = useState({
        fecha: '',
        hora: '',
        recibidoPor: '',
        entregadoPor: '',
    })

    useEffect(() => {
        setTrazabilidad(getTrazabilidad)
    }, [props?.trazabilidades])


    const getTrazabilidad = () => {
        const resultadoBusqueda = props?.trazabilidades?.find(trazabilidad => trazabilidad.puntoDeControlId === props?.id);
        console.warn('resultado', resultadoBusqueda);
        return resultadoBusqueda;
    }

    return (
        // <div className={step == props.id ? "step-wizard-item current-item" : "step-wizard-item"}>
        <div className={"step-wizard-item current-item"}>
            <span className="progress-count">{props.puntoOrden}</span>
            <span className="progress-label">{props.puntoControlNombre}</span>
            <span className="progress-label">{props.puntoGeneracion}</span>
            <>
                <span className="progress-label">{trazabilidad?.fechaHora ? formatDate(trazabilidad?.fechaHora, "DD/MM/YYYY") : ''}</span>
                <span className="progress-label">{trazabilidad?.fechaHora ? `${formatDate(trazabilidad?.fechaHora, "hh:mm")} hs` : ''} </span>
                <span className="progress-label">
                    {
                        trazabilidad?.recibidoPor
                            ?
                            <>
                                {props.orden == 1 ? "Solicitó:" : "Entregó:"}
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
                                {props.orden == 1 ? "Preparó:" : "Recibió:"}
                                {trazabilidad?.entregadoPor ?? ""}
                            </>
                            :
                            ''
                    }
                </span>
                {
                    trazabilidad
                    ? <button className="btn disabled btn-outline-primary">Guardado</button>
                    : <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Guardar</button>

                }
                
                
            </>
            {/* {
                step == props.id - 1 ?
                    <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Guardar</button>
                    : <button className="btn disabled btn-outline-primary">Guardado</button>
            }
            {
                step >= props.id ?
                    
                    : <></>
            } */}

        </div>
    )
}

export default Step