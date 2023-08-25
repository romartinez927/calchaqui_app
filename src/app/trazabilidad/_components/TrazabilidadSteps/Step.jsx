"use client"
import { useState, useEffect } from 'react';
import { formatDate } from '@/utils/dateUtils'

function Step(props) {
    const { puntoDeControlId, idMuestra, puntoControlNombre, orden, trazabilidades } = props;
    const [trazabilidad, setTrazabilidad] = useState({
        fecha: '',
        hora: '',
        recibidoPor: '',
        entregadoPor: '',
    })
    const [formData, setFormData] = useState({
        entregadoPor: '',
        recibidoPor: '',
        puntoDeControlId: null,
    })
    const [puntoDeControlSeleccionado, setPuntoDeControlSeleccionado] = useState(null)

    useEffect(() => {
        setTrazabilidad(getTrazabilidad)
    }, [trazabilidades])

    console.log(formData);
    const getTrazabilidad = () => {
        const resultadoBusqueda = trazabilidades?.find(trazabilidad => trazabilidad.puntoDeControlId === puntoDeControlId);
        console.warn('resultado', resultadoBusqueda);
        return resultadoBusqueda;
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value, puntoDeControlId: puntoDeControlId });
    }

    const handleSubmit = async (e) => {
        console.warn(formData)
        e.preventDefault();
        // try {
        //     const response = await postTrazabilidad(formData)
        //     if (response.ok) {
        //         setCurrentStep(response.data.punto_de_control_id); // Actualiza el estado con el valor de la respuesta

        //         alert("trazabilidad creada con éxito");
        //     }
        // } catch (error) {
        //     if (error.response = 422) {
        //         console.log(error)
        //     }
        // }
    }

    return (
        <div>
            <div className={"step-wizard-item current-item"}>
                <span className="progress-count">{orden}</span>
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
                    {
                        trazabilidad
                            ? <button className="btn disabled btn-outline-primary">Guardado</button>
                            : <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Guardar</button>

                    }


                </>
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
                                    <input type="text" onChange={handleChange} name="entregadoPor" className="form-control" id="entregado_por" />
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
        </div>
    )
}

export default Step