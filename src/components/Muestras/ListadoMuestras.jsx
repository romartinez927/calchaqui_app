import "./ListadoMuestras.css"

export default function ListadoMuestras() {
    return (
        <div className="listado-muestras">
            <div className="d-flex gap-2 bg-light align-items-center justify-content-between">
                <div>
                    <p>Nro. Muestra</p>
                </div>
                <div>
                    <p>Fecha de Alta</p>
                </div>
                <div>
                    <p>DNI</p>
                </div>
                <div>
                    <p>Nombre</p>
                </div>
                <div>
                    <p>Tipo Muestra</p>
                </div>
                <div>
                    <p>Subtipo Muestra</p>
                </div>
                <div>
                    <p>Material Remitido</p>
                </div>
                <div>
                    <p>Preparador</p>
                </div>
                <div>
                    <p>Médico Solicitante</p>
                </div>
                <div>
                    <p>Punto de Generación</p>
                </div>
                <div>
                    <p>Trazabilidad</p>
                </div>
                <div>
                    <p>Acción</p>
                </div>
            </div>
            <div className="d-flex gap-2 bg-light align-items-center justify-content-between">
                <div>
                    <p>12345678-1</p>
                </div>
                <div>
                    <p>02/08/2023</p>
                </div>
                <div>
                    <p>12345678</p>
                </div>
                <div>
                    <p>Juan Perez</p>
                </div>
                <div>
                    <p>Anatomía Patológica</p>
                </div>
                <div>
                    <p>Congelación</p>
                </div>
                <div>
                    <p>Material</p>
                </div>
                <div>
                    <p>Preparador</p>
                </div>
                <div>
                    <p>Médico</p>
                </div>
                <div>
                    <p>1er Piso</p>
                </div>
                <div>
                    <p>GENERACIÓN 1er Piso</p>
                </div>
                <div>
                    <p>{"->"}</p>
                </div>
            </div>
        </div>
    )
}