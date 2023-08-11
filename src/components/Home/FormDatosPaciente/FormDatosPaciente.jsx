import "./FormDatosPaciente.css"

export default function FormDatosPaciente() {
    return (
        <form>
            <div className="datos-container">
                <div className='d-flex justify-content-between align-items-center header div'>
                    <h5>Alta de Muestras</h5>
                    <button className="btn-submit">Guardar e Imprimir</button>
                </div>
                <div className="div">
                    <h6>Datos del Paciente</h6>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <label htmlFor="dni" className="form-label">Dni</label>
                                <input type="text" className="form-control" id="dni" placeholder="Escriba su DNI..."/>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="nombre" placeholder="Escriba su Nombre..."/>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <label htmlFor="apellido" className="form-label">Apellido</label>
                                <input type="text" className="form-control" id="apellido" placeholder="Escriba su Apellido..."/>
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
                    <h6>Datos de la Muestra</h6>
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
                            <input type="text" className="form-control" id="medicoSolicitante" placeholder="Escriba Nombre y Apellido"/>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <label htmlFor="preparador" className="form-label">Preparador</label>
                            <input type="text" className="form-control" id="preparador" placeholder="Escriba Nombre y Apellido"/>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-1">
                            <label htmlFor="apellido" className="form-label">Frascos</label>
                            <input type="number" className="form-control" id="apellido" placeholder="0"/>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-2">
                            <label htmlFor="atb" className="form-label">Nombre ATB</label>
                            <input type="number" className="form-control" id="atb" placeholder="Nombre del ATB..."/>
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
                            <input type="text" className="form-control" id="material" placeholder="Datos del material remitido..."/>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <label htmlFor="localizacion" className="form-label">Localización</label>
                            <input type="number" className="form-control" id="localizacion" placeholder="Datos de Localización..."/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <label htmlFor="diagnostico" className="form-label">Diagnóstico Crítico Presuntivo</label>
                            <input type="text" className="form-control" id="diagnostico" placeholder="Diagnóstico Crítico Presuntivo..."/>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <label htmlFor="observaciones" className="form-label">Observaciones</label>
                            <input type="number" className="form-control" id="observaciones" placeholder="Observaciones..."/>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}