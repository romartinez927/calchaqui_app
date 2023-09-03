export default function FormSelect(props) {
    const {col, label, name, placeholder, id, onChange, disabled, errorTxt, data, value} = props
    return (
        <div className={`col-sm-12 col-md-6 col-lg-${col} py-2`}>
            <label className="form-label" htmlFor={name}>{label}</label>
            <select className="form-select" id={name} name={name} value={value} onChange={onChange} disabled={disabled}>
                <option value="0">{placeholder}</option>
                {
                    data && data.map((opcion) => <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>)
                }
            </select>
            <span className="error-text">
                {errorTxt}
            </span>
        </div>
    )
}