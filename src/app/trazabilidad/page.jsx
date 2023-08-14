import Button from "@/components/Button/Button"
import "../../components/Home/FormDatosPaciente/FormDatosPaciente.css"
import "./trazabilidad.css"
import ProgressBar from "@/components/Trazabilidad/ProgressBar"

export default function Trazabilidad() {
    return (
        <main id="trazabilidad" className="container-fluid">
            <div className='d-flex flex-wrap justify-content-between align-items-center box mx-4'>
                <h5 className="fw-bold">Trazabilidad de la Muestra</h5>
                <div className="d-flex gap-3">
                    <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#suspenderModal" style={{fontSize: "14px"}}>Suspender</button> 
                    <Button color="azul" nombre="Imprimir" />
                </div>
            </div>
            <div className="modal fade" id="suspenderModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-danger">
                            <h1 className="modal-title fs-5 text-light mx-auto" id="exampleModalLabel">Suspensión circuito</h1>
                        </div>
                        <div className="modal-body">
                            <form className="mx-auto">
                                <div className="d-flex flex-column gap-2 mb-3 w-75">
                                    <label for="recipient-name" className="col-form-label fs-6 fw-medium">Responsable:</label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>
                                <div className="d-flex flex-column mb-3">
                                    <label for="message-text" className="col-form-label fs-6 fw-medium">Motivo:</label>
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
            <div className="trazabilidad-container d-flex flex-wrap gap-2 justify-content-center mx-auto mt-3">
                <div className="card-trazabilidad">
                    <img src="http://localhost/proyectos/calchaqui/template/img/hombre-720x174.png" alt="Foto Perfil" width="100%" />
                    <div className="card-body text-center d-flex flex-column gap-2">
                        <h5>Juan Perez</h5>
                        <p>Dni: 12345678</p>
                        <h5>Muestra Nro</h5>
                        <p>12345678-1</p>
                    </div>
                </div>
                <div className="card-trazabilidad">
                    <div className="border-blue"></div>
                    <div className="card-body">
                        <div className="d-flex flex-column my-auto">
                            <h6>Tipo</h6>
                            <p>Anatomía Patológica</p>
                            <h6>Subtipo</h6>
                            <p>Congelación</p>
                            <h6>Cantidad de Frascos: </h6>
                            <h6>ATB</h6>
                        </div>
                    </div>
                </div>
                <div className="card-trazabilidad">
                    <div className="border-blue"></div>
                    <div className="card-body">
                        <div>
                            <h6>Médico Solicitante</h6>
                            <p>Nombre</p>
                            <h6>Preparador</h6>
                            <p>Nombre</p>
                            <h6>Material Remitido</h6>
                            <p>Material</p>
                            <h6>Localización</h6>
                            <p>Localización</p>
                        </div>
                    </div>
                </div>
                <div className="card-trazabilidad">
                    <div className="border-blue"></div>
                    <div className="card-body">
                        <div>
                            <h6>Observaciones</h6>
                            <p>Observaciones</p>
                            <h6>Diagóstico Crítico Presuntivo</h6>
                            <p>Diagnóstico</p>
                        </div>
                    </div>
                </div>
            </div>
            <ProgressBar />
        </main>
    )
}