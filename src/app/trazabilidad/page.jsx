import Button from "@/components/Button/Button"
import "../../components/Home/FormDatosPaciente/FormDatosPaciente.css"
import "./trazabilidad.css"
import ProgressBar from "@/components/Trazabilidad/ProgressBar"

export default function Trazabilidad() {
    return (
        <main className="container-fluid" style={{maxWidth: "1100px"}}>
            <div className="datos-container">
                <div className='d-flex justify-content-between align-items-center header div'>
                    <h5>Trazabilidad de la Muestra</h5>
                    <div className="d-flex gap-3">
                        <Button color="rojo" nombre="Suspender" />
                        <Button color="azul" nombre="Imprimir" />
                    </div>
                </div>
            </div>
            <div className="trazabilidad row row-cols-1 row-cols-md-2 justify-content-between mx-auto mt-3">
                <div className="card-trazabilidad col">
                    <div className="border-blue"></div>
                    <div className="card-body text-center ">
                        <div>
                            <img src="https://static.thenounproject.com/png/4130647-200.png" alt="Foto Perfil" width="90" />
                            <h6>Juan Perez</h6>
                            <p>Dni</p>
                            <h6>Muestra Nro</h6>
                            <p>Nro</p>
                        </div>
                    </div>
                </div>
                <div className="card-trazabilidad col">
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
                <div className="card-trazabilidad col">
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
                <div className="card-trazabilidad col">
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
            <ProgressBar/>
        </main>
    )
}