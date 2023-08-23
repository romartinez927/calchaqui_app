import Button from '@/components/Button/Button'

import React from 'react'
import "../trazabilidad.css"
import DatosPaciente from '../_components/DatosPaciente/DatosPaciente'
import ProgressBar from '../_components/ProgressBar/ProgressBar'

function page({ params }) {
    return (
        <main id="trazabilidad" className="container-fluid">
            <div className='d-flex flex-wrap justify-content-between align-items-center box mx-4'>
                <h5 className="fw-bold">Trazabilidad de la Muestra</h5>
                <div className="d-flex gap-3">
                    <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#suspenderModal" style={{ fontSize: "14px" }}>Suspender</button>
                    <Button color="azul" nombre="Imprimir" />
                </div>
            </div>
            <div className="modal fade" id="suspenderModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-danger">
                            <h1 className="modal-title fs-5 text-light mx-auto" id="exampleModalLabel">Suspensión circuito</h1>
                        </div>
                        <div className="modal-body">
                            <form className="mx-auto">
                                <div className="d-flex flex-column gap-2 mb-3 w-75">
                                    <label htmlFor="recipient-name" className="col-form-label fs-6 fw-medium">Responsable:</label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>
                                <div className="d-flex flex-column mb-3">
                                    <label htmlFor="message-text" className="col-form-label fs-6 fw-medium">Motivo:</label>
                                    <textarea type="text" className="form-control" id="recipient-name" />
                                </div>
                            </form>
                            <div className="d-flex justify-content-center gap-2">
                                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancelar</button>
                                <button type="button" className="btn btn-success">Registrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DatosPaciente id={params.id}/>
            <ProgressBar id={params.id}/>
        </main>
    )
}

export default page