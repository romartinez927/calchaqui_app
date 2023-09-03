import "./button.css"

export default function Button(props) {
    return <button className={`button ${props.color}`} type={props.type} onClick={props?.onClick}>{props.nombre}</button>
}