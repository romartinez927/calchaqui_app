export default function FormSelect(props) {
    const opciones = props.data
    return (
        <div className={`col-sm-12 col-md-6 col-lg-${props.col}`}>
            <label className="form-label" htmlFor={props.name}>{props.label}</label>
            <select className="form-select" id={props.name} name={props.name} value={props.value} onChange={props.onChange}>
                <option value="0">{props.placeholder}</option>
                {
                    opciones && opciones.map((opcion) => <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>)
                }
            </select>
        </div>
    )
}