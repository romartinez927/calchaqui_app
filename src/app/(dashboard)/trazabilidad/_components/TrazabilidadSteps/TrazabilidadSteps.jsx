"use client"
import "./TrazabilidadSteps.css"
import { getTrazabilidadDeMuestra } from "@/api/trazabilidad/getTrazabilidadDeMuestra";
import { useEffect, useState } from "react";
import { getPuntosDeControl } from "@/api/puntos_de_control/getPuntosDeControl";
import Step from "./Step";
import Skeleton from "../DatosMuestra/Skeleton";

function TrazabilidadSteps(props) {
    const [trazabilidades, setTrazabilidades] = useState([])
    const [puntosDeControl, setPuntosDeControl] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    async function fetchData() {
        try {
            const adaptedData = await getTrazabilidadDeMuestra(props.idMuestra);
            setTrazabilidades(adaptedData);
            console.log(adaptedData)

            const puntosControl = await getPuntosDeControl()
            setPuntosDeControl(puntosControl)

        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    const handleChildSubmit = async () => {
        console.log("holiis")
        await fetchData()
    };

    return (
        <section className="step-wizard mt-2">
            <div className="step-wizard-list">
                {
                    isLoading ? 
                        <Skeleton/> 
                        : puntosDeControl.map(punto => (
                            <Step
                                key={punto.id}
                                puntoDeControlId={punto.id}
                                idMuestra={props.idMuestra}
                                puntoControlNombre={punto.nombre}
                                orden={punto.orden}
                                trazabilidades={trazabilidades}
                                onChildSubmit={handleChildSubmit}
                            />
                        ))
                }
            </div>
        </section>
    )
}

export default TrazabilidadSteps