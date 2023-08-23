"use client"

import { getTrazabilidad } from "@/api/getTrazabilidad";
import "./progressBar.css"
import { useEffect, useState } from "react";
import { postTrazabilidad } from "@/api/setTrazabilidad";
import { formatDate } from "@/utils/dateUtils";
import ProgressBarItem from "./ProgressBarItem";

function ProgressBar(props) {
    const [trazabilidad, setTrazabilidad] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [formData, setFormData] = useState({
        recibido_por: '',
        entregado_por: '',
        model_id: props.id,
    })

    useEffect(() => {
        async function fetchData() {
            try {
                const adaptedData = await getTrazabilidad(props.id);
                setTrazabilidad(adaptedData);
                console.log(adaptedData)
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await postTrazabilidad(formData)
            console.log(response)
            alert("trazabilidad creada con éxito")
        } catch (error) {
            if (error.response = 422) {
                // console.log(error.request.responseText)
                const errores = error.request.response
                console.log(errores.errors)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    console.log(formData)

    return (
        <section className="step-wizard mt-2">
            <div className="step-wizard-list">
                {/* <div className="step-wizard-item">
                    <span className="progress-count">1</span>
                    <span className="progress-label">Generación Muestra</span>
                    <span className="progress-label">1er Piso</span>
                    <button className="btn disabled btn-outline-primary">Generado</button>
                    <span className="progress-label">{formatDate(trazabilidad.fecha, "DD/MM/YYYY")}</span>
                    <span className="progress-label">{formatDate(trazabilidad.fecha, "hh:mm")} hs</span>
                    <span className="progress-label">Solicitó: {trazabilidad.recibido_por}</span>
                    <span className="progress-label">Preparó: {trazabilidad.entregado_por}</span>
                </div> */}
                <ProgressBarItem
                    count="1"
                    puntoControl="Generación Muestra"
                    puntoGeneracion="1er Piso"
                    fecha={trazabilidad.fecha}
                    recibido_por={trazabilidad.recibido_por}
                    entregado_por={trazabilidad.entregado_por}
                    buttonTxt="Generado"
                    id={props.id}
                />
                <ProgressBarItem
                    count="2"
                    puntoControl="Egreso Muestra"
                    puntoGeneracion="1er Piso"
                    fecha={trazabilidad?.fecha}
                    recibido_por={trazabilidad?.recibido_por}
                    entregado_por={trazabilidad?.entregado_por}
                    buttonTxt="Guardado"
                    currentItem="true"
                    id={props.id}
                />
                {/* <ProgressBarItem
                    count="3"
                    puntoControl="Ingreso Muestra"
                    puntoGeneracion="Admisión"
                    fecha={trazabilidad.fecha}
                    recibido_por={trazabilidad.recibido_por}
                    entregado_por={trazabilidad.entregado_por}
                    buttonTxt="Guardar"
                    id={props.id}
                />
                <ProgressBarItem
                    count="4"
                    puntoControl="Egreso Institución"
                    puntoGeneracion="-"
                    fecha={trazabilidad.fecha}
                    recibido_por={trazabilidad.recibido_por}
                    entregado_por={trazabilidad.entregado_por}
                    buttonTxt="Guardar"
                    id={props.id}
                />
                <ProgressBarItem
                    count="5"
                    puntoControl="Recepción"
                    puntoGeneracion="Informe"
                    fecha={trazabilidad.fecha}
                    recibido_por={trazabilidad.recibido_por}
                    entregado_por={trazabilidad.entregado_por}
                    buttonTxt="Guardar"
                    id={props.id}
                />
                <ProgressBarItem
                    count="6"
                    puntoControl="Egreso"
                    puntoGeneracion="Informe"
                    fecha={trazabilidad.fecha}
                    recibido_por={trazabilidad.recibido_por}
                    entregado_por={trazabilidad.entregado_por}
                    buttonTxt="Guardar"
                    id={props.id}
                /> */}
                {/* <div className="step-wizard-item current-item">
                    <span className="progress-count">2</span>
                    <span className="progress-label">Egreso Muestra</span>
                    <span className="progress-label">1er Piso</span>
                    <button className="btn btn-outline-primary">Guardado</button>
                </div> */}
                {/* <div className="step-wizard-item">
                    <span className="progress-count">3</span>
                    <span className="progress-label">Ingreso Muestra</span>
                    <span className="progress-label">Admisión</span>
                    <button type="button" className="btn btn-outline-primary disabled" data-bs-toggle="modal" data-bs-target="#exampleModal">Guardar</button>
                </div> */}
                {/* <div className="step-wizard-item">
                    <span className="progress-count">4</span>
                    <span className="progress-label">Egreso Institución</span>
                    <span className="progress-label">-</span>
                    <button className="btn btn-outline-primary disabled">Guardar</button>
                </div>
                <div className="step-wizard-item">
                    <span className="progress-count">5</span>
                    <span className="progress-label">Recepción</span>
                    <span className="progress-label">Informe</span>
                    <button className="btn btn-outline-primary disabled">Guardar</button>
                </div>
                <div className="step-wizard-item">
                    <span className="progress-count">6</span>
                    <span className="progress-label">Entrega</span>
                    <span className="progress-label">Informe</span>
                    <button className="btn btn-outline-primary disabled">Guardar</button>
                </div> */}
            </div>
            <div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 text-light mx-auto" id="exampleModalLabel">Registro EGRESO MUESTRA</h1>
                            </div>
                            <div className="modal-body">
                                <form className="w-50 mx-auto" onSubmit={handleSubmit}>
                                    <div className="d-flex gap-2 mb-3">
                                        <label htmlFor="entregado_por" className="col-form-label">Entrega:</label>
                                        <input type="text" onChange={handleChange} name="entregado_por" className="form-control" id="entregado_por" />
                                    </div>
                                    <div className="d-flex gap-3 mb-3">
                                        <label htmlFor="recibido_por" className="col-form-label">Recibe:</label>
                                        <input type="text" onChange={handleChange} name="recibido_por" className="form-control" id="recibido_por" />
                                    </div>
                                </form>
                                <div className="d-flex justify-content-center gap-2">
                                    <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancelar</button>
                                    <button type="submit" className="btn btn-success">Registrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProgressBar