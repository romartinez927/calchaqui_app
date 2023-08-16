import { getObrasSociales } from "@/api/getObrasSociales"
import { getServicios } from "@/api/getServicios"
import { getSubtipos } from "@/api/getSubtipos"
import { getTipos } from "@/api/getTipos"

export default async function FormSelect(props) {
    let opciones
    let opcion = props.data

    // Usar una estructura switch para tomar diferentes acciones
    switch (opcion) {
        case 'obraSocial':
            opciones = await getObrasSociales()
            console.log(opciones)
            break;
        case 'tipo':
            opciones = await getTipos()
            break;
        case 'subtipo':
            opciones = await getSubtipos()
            break;
        case 'servicios':
            opciones = await getServicios()
            break;
        default:
            console.log('Opción no reconocida');
            break;
    }

    return (
        <div className={`col-sm-12 col-md-6 col-lg-${props.col}`}>
            <label className="form-label" htmlFor={props.name}>{props.label}</label>
            <select className="form-select" id={props.name} value={props.value} onChange={props.onChange}>
                <option value="0">{props.placeholder}</option>
                {
                    opciones && opciones.map((opcion) => <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>)
                }
            </select>
        </div>
    )
}