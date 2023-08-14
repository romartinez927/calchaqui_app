"use client"

import Button from "@/components/Button/Button"
import "../../components/Home/FormDatosPaciente/FormDatosPaciente.css"
import "./muestras.css"
import { useEffect, useState } from "react"
import { getMuestras } from "@/api/getMuestras.js"
import TablaMuestras from "@/components/Muestras/TablaMuestras"

export default function Muestras() {
    const [muestras, setMuestras] = useState([])

    useEffect(() => {
        // Llamada a la función getMuestras y manejo de los datos
        async function fetchData() {
          try {
            const query = ''; // Puedes ajustar la búsqueda si es necesario
            const adaptedData = await getMuestras(query);
            setMuestras(adaptedData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, []);

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
                            <input className="form-control" type="search" placeholder="Ingrese cualquier texto..."/>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <input className="form-control input-date" type="date" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <input className="form-control input-date" type="date" />
                        </div>
                        <div className="d-flex col-sm-12 col-md-6 col-lg-1 gap-2">
                            <Button nombre="Buscar" color="azul"/>
                            <Button nombre="Limpiar" color="rojo"/>
                        </div>
                    </div>
                </div>
            </div>
            <TablaMuestras muestras={muestras}/>
        </main>
    )
}