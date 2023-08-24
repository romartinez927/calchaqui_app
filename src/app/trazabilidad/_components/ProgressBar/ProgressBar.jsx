"use client"

import { getTrazabilidad } from "@/api/getTrazabilidad";
import "./progressBar.css"
import { useEffect, useState } from "react";
import { postTrazabilidad } from "@/api/setTrazabilidad";
import { formatDate } from "@/utils/dateUtils";
import ProgressBarItem from "./ProgressBarItem";
import { getPuntosDeControl } from "@/api/getPuntosDeControl";

function ProgressBar(props) {
    const [trazabilidad, setTrazabilidad] = useState([])
    const [puntosDeControl, setPuntosDeControl] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [formData, setFormData] = useState({
        recibido_por: '',
        entregado_por: '',
        model_id: props.id,
    })
   
    const [currentStep, setCurrentStep] = useState(1);

    useEffect(() => {
        async function fetchData() {
            try {
                const adaptedData = await getTrazabilidad(props.id);
                setTrazabilidad(adaptedData);
                console.log(adaptedData)

                const puntosControl = await getPuntosDeControl()
                setPuntosDeControl(puntosControl)
                console.log(puntosControl)

                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (trazabilidad.punto_de_control_id) {
            let trazabilidadPunto = trazabilidad.punto_de_control_id
            setCurrentStep(trazabilidadPunto++);
        }
    }, [trazabilidad.punto_de_control_id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await postTrazabilidad(formData)
            if (response.ok) {
                setCurrentStep(response.data.punto_de_control_id); // Actualiza el estado con el valor de la respuesta
              
                alert("trazabilidad creada con éxito");
            }
        } catch (error) {
            if (error.response = 422) {
                console.log(error)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <section className="step-wizard mt-2">
            <div className="step-wizard-list">
                {
                    puntosDeControl.map(punto => (
                        <ProgressBarItem
                            key={punto.id}
                            id={punto.id}
                            idMuestra={props.id}
                            puntoControlNombre={punto.nombre}
                            puntoOrden={punto.id}
                            currentItem={currentStep}
                            setStep={setCurrentStep} 
                        />
                    ))
                }
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
                                    <div className="d-flex justify-content-center gap-2">
                                        <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancelar</button>
                                        <button type="submit" className="btn btn-success" data-bs-dismiss="modal">Registrar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProgressBar