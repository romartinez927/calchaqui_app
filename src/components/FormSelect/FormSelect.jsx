export default function FormSelect(props) {
    const opciones = ["Uno", "Dos", "Tres"]

    return (
        <div className={`col-sm-12 col-md-6 col-lg-${props.col}`}>
            <label className="form-label" htmlFor={props.name}>{props.label}</label>
            <select className="form-select" id={props.name} value={props.value} onChange={props.onChange}>
                <option value="0">{props.placeholder}</option>
                {
                    opciones.map((opcion, index) => <option key={index} value={opcion}>{opcion}</option>)
                }
            </select>
        </div>
    )
}