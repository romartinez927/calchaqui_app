import Button from "@/components/Button/Button"
import "../../components/Home/FormDatosPaciente/FormDatosPaciente.css"
import "./muestras.css"
import ListadoMuestras from "@/components/Muestras/ListadoMuestras"

export default function Muestras() {
    return (
        <main>
            <div className="datos-container">
                <div className='d-flex header div'>
                    <h5>Listado de Muestras</h5>
                </div>
                <div className='d-flex gap-3 header div mt-2'>
                    <input type="search" placeholder="Ingrese cualquier texto: nombre, apellido, tipo, subtipo, etc..."/>
                    <input type="date" />
                    <input type="date" />
                    <Button nombre="Buscar" color="azul"/>
                    <Button nombre="Limpiar" color="rojo"/>
                </div>
            </div>
            <ListadoMuestras/>
        </main>
    )
}