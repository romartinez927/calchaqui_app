import Skeleton from "./Skeleton"
import "./datosMuestra.css"

function DatosMuestra(props) {
    const {isLoading, muestra} = props
    return (
        <div className="trazabilidad-container d-flex flex-wrap gap-2 justify-content-center mx-auto mt-3">
            <div className="card-trazabilidad">
                <img src="http://localhost/proyectos/calchaqui/template/img/hombre-720x174.png" alt="Foto Perfil" width="100%" />
                {
                    isLoading ?
                        <div className="col movie--isloading datos">
                            <div className="loading-content">
                                <div className="loading-text-container d-flex flex-column gap-4">
                                    <div className="loading-main-text m-auto"></div>
                                    <div className="loading-main-text m-auto"></div>
                                    <div className="loading-main-text m-auto"></div>
                                    <div className="loading-main-text m-auto"></div>
                                </div>
                            </div>

                        </div>
                        : <div className="card-body text-center d-flex flex-column gap-2">
                            <h5>{muestra.paciente?.nombre} {muestra.paciente?.apellido}</h5>
                            <p>Dni: {muestra.paciente?.dni}</p>
                            <h5>Muestra Nro</h5>
                            <p>{muestra.id}</p>
                        </div>
                }
            </div>
            <div className="card-trazabilidad">
                <div className="border-blue"></div>
                {
                    isLoading ?
                        <Skeleton />
                        : <div className='card-body'>
                            <h6>Tipo</h6>
                            <p>{muestra.tipo_muestra?.nombre}</p>
                            <h6>Subtipo</h6>
                            <p>{muestra.subtipo_muestra?.nombre}</p>
                            <h6>Cantidad de Frascos: {muestra.frascos}</h6>
                            <h6>ATB</h6>
                            <p>{muestra.atb}</p>
                        </div>
                }
            </div>
            <div className="card-trazabilidad">
                <div className="border-blue"></div>
                {
                    isLoading ?
                        <Skeleton />
                        : <div className='card-body'>
                            <h6>Médico Solicitante</h6>
                            <p>{muestra.medico}</p>
                            <h6>Preparador</h6>
                            <p>{muestra.preparador}</p>
                            <h6>Material Remitido</h6>
                            <p>{muestra.material}</p>
                            <h6>Localización</h6>
                            <p>{muestra.localizacion}</p>
                        </div>
                }
            </div>
            <div className="card-trazabilidad">
                <div className="border-blue"></div>
                <div>
                    {
                        isLoading ?
                            <Skeleton />
                            : <div className='card-body'>
                                <h6>Observaciones</h6>
                                <p>{muestra.observaciones}</p>
                                <h6>Diagóstico Crítico Presuntivo</h6>
                                <p>{muestra.diagnostico}</p>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default DatosMuestra