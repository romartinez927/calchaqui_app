"use client"

import Button from "@/components/Button/Button"
import "./muestras.css"
import { useEffect, useState, useContext } from "react"
import { getMuestras } from "@/api/muestras/getMuestras"
import TablaMuestras from "@/app/(dashboard)/muestras/_components/ListadoMuestras/TablaMuestras"
import { AuthContext } from "../../../context/AuthContext"

export default function Muestras() {
    const { accessToken } = useContext(AuthContext)
    const [muestras, setMuestras] = useState([])
    const [muestrasInitial, setMuestrasInitial] = useState([])
    const [fechaInicio, setFechaInicio] = useState("")
    const [fechaFin, setFechaFin] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Llamada a la función getMuestras y manejo de los datos
        async function fetchData() {
            try {
                console.log(accessToken)
                const adaptedData = await getMuestras();
                setMuestras(adaptedData);
                setMuestrasInitial(adaptedData);
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    const searchByDate = () => {
        const filteredMuestras = muestrasInitial.filter((muestra) => {
            const muestraFecha = muestra?.fechaAlta.substring(0, 10);

            return (
                (muestraFecha >= fechaInicio &&
                    muestraFecha <= fechaFin)
            );
        });

        setMuestras(filteredMuestras);
    }

    const search = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        console.log(searchTerm)
        const filteredMuestras = muestrasInitial.filter((muestra) => {

            return (
                (searchTerm === "" ||
                    muestra?.material?.toLowerCase().includes(searchTerm) ||
                    muestra?.paciente?.nombre.toLowerCase().includes(searchTerm) ||
                    muestra?.paciente?.apellido.toLowerCase().includes(searchTerm) ||
                    muestra?.tipo_muestra?.nombre.toLowerCase().includes(searchTerm) ||
                    muestra?.fechaAlta?.toLowerCase().includes(searchTerm)) 
            );
        });

        setMuestras(filteredMuestras);

        if (searchTerm === "") {
            setMuestras(muestrasInitial);
        }
    };

    const resetFilters = () => {
        setMuestras(muestrasInitial);
        setFechaInicio("");
        setFechaFin("");
    };

    const searchButtonClicked = () => {
        searchByDate();
    };

    return (
        <main className="muestras-container">
            <div>
                <div className='d-flex header box'>
                    <h5 className="mb-0 fw-bold">Listado de Muestras</h5>
                </div>
            </div>
            <div>
                <div className='d-flex flex-wrap gap-3 header box mt-2' >
                    <div className="row gy-2 ">
                        <div className="col-sm-12 col-md-6 col-lg-5">
                            <input className="form-control" type="search" placeholder="Ingrese cualquier texto..." onChange={search} />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <input className="form-control input-date" type="date" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <input className="form-control input-date" type="date" value={fechaFin} onChange={(e) => setFechaFin(e.target.value)} />
                        </div>
                        <div className="d-flex col-sm-12 col-md-6 col-lg-1 gap-2">
                            <Button nombre="Buscar" color="azul" onClick={searchButtonClicked} />
                            <Button nombre="Limpiar" color="rojo" onClick={resetFilters} />
                        </div>
                    </div>
                </div>
            </div>
            <TablaMuestras muestras={muestras} isLoading={isLoading} />
            {muestras == 0 ?
                <div className="d-flex justify-content-center align-items-center my-auto" style={{ height: "100px" }}>
                    <p>No se encontraron muestras...</p>
                </div>
                : <></>}
        </main>
    )
}