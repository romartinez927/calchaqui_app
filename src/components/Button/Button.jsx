import "./button.css"

export default function Button(props) {
    return <button className={`button ${props.color}`} type={props.type}>{props.nombre}</button>
}