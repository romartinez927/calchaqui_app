"use client"
import { getTrazabilidadDeMuestra } from "@/api/getTrazabilidadDeMuestra";
import "./TrazabilidadSteps.css"
import { useEffect, useState } from "react";
import { postTrazabilidad } from "@/api/setTrazabilidad";
import { getPuntosDeControl } from "@/api/getPuntosDeControl";
import Step from "./Step";
import Skeleton from "../DatosMuestra/Skeleton";

function TrazabilidadSteps(props) {
    const [trazabilidades, setTrazabilidades] = useState([])
    const [puntosDeControl, setPuntosDeControl] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    console.log(props.id)
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