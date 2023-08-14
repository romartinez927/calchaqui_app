import Button from "@/components/Button/Button"
import "./FormDatosPaciente.css"

export default function FormDatosPaciente() {
    return (
        <form className="form-datos-paciente">
            <div className="datos-container">
                <div className='d-flex justify-content-between align-items-center header div'>
                    <h5 className="fw-bold">Alta de Muestras</h5>
                    <Button color="verde" nombre="Guardar e Imprimir" />
                </div>
                <div className="div">
                    <h6 className="fw-bold">Datos del Paciente</h6>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <label htmlFor="dni" className="form-label">Dni</label>
                                <input type="text" className="form-control" id="dni" placeholder="Escriba su DNI..." />
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="nombre" placeholder="Escriba su Nombre..." />
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <label htmlFor="apellido" className="form-label">Apellido</label>
                                <input type="text" className="form-control" id="apellido" placeholder="Escriba su Apellido..." />
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <label className="form-label" htmlFor="autoSizingSelect">Obra Social</label>
                                <select className="form-select" id="autoSizingSelect" defaultValue={0}>
                                    <option value="0">Seleccione Obra Social...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="datos-container mt-4">
                <div className="div">
                    <h6 className="fw-bold">Datos de la Muestra</h6>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <label className="form-label" htmlFor="autoSizingSelect">Punto de Generación</label>
                            <select className="form-select" id="autoSizingSelect" defaultValue={0}>
                                <option value="0">Seleccione punto...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <label htmlFor="medicoSolicitante" className="form-label">Médico Solicitante</label>
                            <input type="text" className="form-control" id="medicoSolicitante" placeholder="Escriba Nombre y Apellido" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-2">
                            <label htmlFor="preparador" className="form-label">Preparador</label>
                            <input type="text" className="form-control" id="preparador" placeholder="Escriba Nombre..." />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-1">
                            <label htmlFor="apellido" className="form-label">Frascos</label>
                            <input type="number" className="form-control" id="apellido" placeholder="Cant." />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-1">
                            <label htmlFor="radio" className="form-label">ATB</label>
                            <div className="d-flex flex-column">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" for="flexRadioDefault1">
                                        Sí
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                    <label className="form-check-label" for="flexRadioDefault2">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-2">
                            <label htmlFor="atb" className="form-label">Nombre ATB</label>
                            <input type="number" className="form-control" id="atb" placeholder="Nombre del ATB..." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <label className="form-label" htmlFor="autoSizingSelect">Tipo</label>
                            <select className="form-select" id="autoSizingSelect" defaultValue={0}>
                                <option value="0">Seleccione tipo...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <label className="form-label" htmlFor="autoSizingSelect">Subtipo</label>
                            <select className="form-select" id="autoSizingSelect" defaultValue={0}>
                                <option value="0">Seleccione subtipo...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <label htmlFor="material" className="form-label">Material remitido</label>
                            <input type="text" className="form-control" id="material" placeholder="Datos del material remitido..." />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <label htmlFor="localizacion" className="form-label">Localización</label>
                            <input type="number" className="form-control" id="localizacion" placeholder="Datos de Localización..." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <label htmlFor="diagnostico" className="form-label">Diagnóstico Crítico Presuntivo</label>
                            <input type="text" className="form-control" id="diagnostico" placeholder="Diagnóstico Crítico Presuntivo..." />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <label htmlFor="observaciones" className="form-label">Observaciones</label>
                            <input type="number" className="form-control" id="observaciones" placeholder="Observaciones..." />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}