"use client"
import "./TrazabilidadSteps.css"
import { getTrazabilidadDeMuestra } from "@/api/trazabilidad/getTrazabilidadDeMuestra";
import { useEffect, useState } from "react";
import { getPuntosDeControl } from "@/api/puntos_de_control/getPuntosDeControl";
import Step from "./Step";
import { postTrazabilidad } from "@/api/trazabilidad/setTrazabilidad";
import SkeletonTrazabilidad from "./SkeletonTrazabilidad";

function TrazabilidadSteps(props) {
    const [trazabilidades, setTrazabilidades] = useState([])
    const [puntosDeControl, setPuntosDeControl] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [formData, setFormData] = useState({
        entregadoPor: '',
        recibidoPor: '',
        modelId: props.idMuestra,
    })

    async function fetchData() {
        try {
            const adaptedData = await getTrazabilidadDeMuestra(props.idMuestra);
            setTrazabilidades(adaptedData);

            const puntosControl = await getPuntosDeControl()
            setPuntosDeControl(puntosControl)

        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value, modelId: props.idMuestra })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await postTrazabilidad(formData)
            await fetchData()

        } catch (error) {
            if (error.response = 422) {
                console.log(error)
            }
        }
    }

    return (
        <section className="step-wizard mt-2">
            <div className="step-wizard-list">
                {
                    isLoading ? 
                        <SkeletonTrazabilidad/> 
                        : puntosDeControl.map(punto => (
                            <Step
                                key={punto.id}
                                puntoDeControlId={punto.id}
                                puntoControlNombre={punto.nombre}
                                orden={punto.orden}
                                trazabilidades={trazabilidades}
                            />
                        ))
                }
            </div>
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
                                        <input type="text" onChange={handleChange} name="entregadoPor"  className="form-control" id="entregado_por" />
                                    </div>
                                    <div className="d-flex gap-3 mb-3">
                                        <label htmlFor="recibido_por" className="col-form-label">Recibe:</label>
                                        <input type="text" onChange={handleChange} name="recibidoPor" className="form-control" id="recibido_por" />
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
        </section>
    )
}

export default TrazabilidadSteps