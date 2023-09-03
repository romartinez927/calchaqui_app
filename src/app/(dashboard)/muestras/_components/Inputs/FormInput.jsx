import "./FormInput.css"

export default function FormInput(props) {
    const { name, label, type, disabled, value, placeholder, onChange, col, errorTxt } = props
    return (
        <div className={`col-sm-12 col-md-6 col-lg-${col} py-2`}>
            <label htmlFor={name} className="form-label">{label}</label>
            <input
                name={name}
                type={type}
                value={value}
                className="form-control"
                id={name}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
                required
            />
            <span className="error-text">
                {errorTxt}
            </span>
        </div>
    )
}