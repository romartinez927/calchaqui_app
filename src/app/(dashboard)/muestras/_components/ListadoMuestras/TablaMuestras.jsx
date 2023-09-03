import Link from "next/link"
import "./tablaMuestras.css"
import { formatDate } from "@/utils/dateUtils"
import SkeletonItem from "../Skeleton/SkeletonItem"

export default function TablaMuestras({ muestras, isLoading }) {
    const skeletonItems = Array.from({ length: 10 }, (_, index) => (
        <SkeletonItem key={index} />
      ));

    if (isLoading) {
        return (
            <div className="datos-container board mt-3">
                <table width="100%" className="tabla-muestras header">
                <thead>
                        <tr>
                            <td>
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
                </table>
                {skeletonItems}

            </div>
        )

    }
    else {
        return (
            <div className="datos-container board mt-3">
                <table width="100%" className="tabla-muestras header">
                    <thead>
                        <tr>
                            <td>
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
                                <tr key={muestra?.id}>
                                    <td>
                                        <p>{muestra?.id}</p>
                                    </td>
                                    <td>
                                        <p>{formatDate(muestra?.fechaAlta, "DD/MM/YYYY")}</p>
                                    </td>
                                    <td>
                                        <p>{muestra?.paciente?.dni}</p>
                                    </td>
                                    <td>
                                        <p className="mb-0">{muestra?.paciente?.nombre}</p>
                                        <p className="mt-0">{muestra?.paciente?.apellido}</p>
                                    </td>
                                    <td>
                                        <p>{muestra?.tipo_muestra?.nombre}</p>
                                    </td>
                                    <td>
                                        <p>{muestra?.subtipo_muestra?.nombre}</p>
                                    </td>
                                    <td>
                                        <p>{muestra?.material}</p>
                                    </td>
                                    <td>
                                        <p>{muestra?.preparador}</p>
                                    </td>
                                    <td>
                                        <p>{muestra?.medico}</p>
                                    </td>
                                    <td>
                                        <p>{muestra?.servicio?.nombre}</p>
                                    </td>
                                    <td>
                                        <p>{muestra?.trazabilidades[muestra?.trazabilidades?.length - 1]?.punto_de_control?.nombre}</p>
                                    </td>
                                    <td>
                                        <Link href={`/trazabilidad/${muestra?.id}`} className="nav-link " >
                                            <img src="/flecha.png" className="btn-muestras" alt="Ir a Trazabilidad" />
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}