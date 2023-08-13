import Link from "next/link"
import "./tablaMuestras.css"

export default function TablaMuestras({muestras}) {
    return (
        <div className="datos-container board mt-3">
            <table width="100%" className="tabla-muestras header">
                <thead>
                    <tr>
                        <td>
                            <p>Muestra</p>
                            <p>N°</p>
                        </td>
                        <td>
                            <p>Fecha de</p>
                            <p>alta</p>
                        </td>
                        <td>D.N.I</td>
                        <td>Nombre</td>
                        <td>Tipo Muestra</td>
                        <td>
                            <p>Subtipo</p>
                            <p>Muestra</p>
                        </td>
                        <td>
                            <p>Material</p>
                            <p>Remitido</p>
                        </td>
                        <td>Preparador</td>
                        <td>
                            <p>Médico</p>
                            <p>Solicitante</p>
                        </td>
                        <td>
                            <p>Punto de</p>
                            <p>Generación</p>
                        </td>
                        <td>Trazabilidad</td>
                        <td>Acción</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        muestras.map((muestra) => (
                            <tr key={muestra.id}>
                                <td>
                                    <p>{muestra.id}</p>
                                </td>
                                <td>
                                    <p>02/08/2023</p>
                                </td>
                                <td>
                                    <p>{muestra.paciente_id}</p>
                                </td>
                                <td>
                                    <p className="mb-0">Juan</p>
                                    <p className="mt-0">Perez</p>
                                </td>
                                <td>
                                    <p>{muestra.nombre_muestra}</p>
                                </td>
                                <td>
                                    <p>Congelación</p>
                                </td>
                                <td>
                                    <p>Material</p>
                                </td>
                                <td>
                                    <p>Preparador</p>
                                </td>
                                <td>
                                    <p>Médico</p>
                                </td>
                                <td>
                                    <p>1er Piso</p>
                                </td>
                                <td>
                                    <p>GENERACIÓN 1er Piso</p>
                                </td>
                                <td>
                                    <Link href="/trazabilidad" className="nav-link btn-muestras" >{"->"}</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}