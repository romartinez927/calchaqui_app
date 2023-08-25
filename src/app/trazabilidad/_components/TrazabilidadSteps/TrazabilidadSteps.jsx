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
    

    useEffect(() => {
        async function fetchData() {
            try {
                const adaptedData = await getTrazabilidadDeMuestra(props.idMuestra);
                setTrazabilidades(adaptedData);

                const puntosControl = await getPuntosDeControl()
                setPuntosDeControl(puntosControl)

            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    // useEffect(() => {
    //     if (trazabilidad.punto_de_control_id) {
    //         let trazabilidadPunto = trazabilidad.punto_de_control_id
    //         setCurrentStep(trazabilidadPunto++);
    //     }
    // }, [trazabilidad.punto_de_control_id]);

  

    
    
    

    return (
        <section className="step-wizard mt-2">
            <div className="step-wizard-list">
                {
                    isLoading ? 
                        <Skeleton/> 
                        : puntosDeControl.map(punto => (
                            <Step
                                key={punto.id}
                                id={punto.id}
                                idMuestra={props.id}
                                puntoControlNombre={punto.nombre}
                                orden={punto.id}
                                trazabilidades={trazabilidades}
                            />
                        ))
                }
            </div>
        </section>
    )
}

export default TrazabilidadSteps