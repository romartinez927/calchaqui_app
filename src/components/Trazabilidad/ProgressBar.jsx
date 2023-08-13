import "./progressBar.css"

export default function ProgressBar() {
    return (
        <section className="step-wizard mt-2">
            <div className="step-wizard-list">
                <div className="step-wizard-item">
                    <span className="progress-count">1</span>
                    <span className="progress-label">Generación Muestra</span>
                    <span className="progress-label">1er Piso</span>
                    <button className="btn disabled btn-outline-primary">Generado</button>
                    <span className="progress-label">02/08/2023</span>
                    <span className="progress-label">19:25 hs</span>
                    <span className="progress-label">Solicitó: Medico</span>
                    <span className="progress-label">Preparó: Preparador</span>
                </div>
                <div className="step-wizard-item current-item">
                    <span className="progress-count">2</span>
                    <span className="progress-label">Egreso Muestra</span>
                    <span className="progress-label">1er Piso</span>
                    <button className="btn disabled btn-outline-primary">Guardado</button>
                </div>
                <div className="step-wizard-item">
                    <span className="progress-count">3</span>
                    <span className="progress-label">Ingreso Muestra</span>
                    <span className="progress-label">Admisión</span>
                    <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Guardar</button>
                </div>
                <div className="step-wizard-item">
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
                </div>
            </div>
            <div>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 text-light mx-auto" id="exampleModalLabel">Registro EGRESO MUESTRA</h1>
                            </div>
                            <div className="modal-body">
                                <form className="w-50 mx-auto">
                                    <div class="d-flex gap-2 mb-3">
                                        <label for="recipient-name" class="col-form-label">Entrega:</label>
                                        <input type="text" class="form-control" id="recipient-name" />
                                    </div>
                                    <div class="d-flex gap-3 mb-3">
                                        <label for="message-text" class="col-form-label">Recibe:</label>
                                        <input type="text" class="form-control" id="recipient-name" />
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
            </div>
        </section>
    )
}