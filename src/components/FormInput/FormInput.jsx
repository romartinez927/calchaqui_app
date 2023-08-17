export default function FormInput(props) {
    return (
        <div className={`col-sm-12 col-md-6 col-lg-${props.col}`}>
            <label htmlFor={props.name} className="form-label">{props.label}</label>
            <input 
                type={props.type} 
                value={props.value} 
                className="form-control"
                id={props.name} 
                placeholder={props.placeholder}
                onChange={props.onChange}
                // required
            />
        </div>
    )
}