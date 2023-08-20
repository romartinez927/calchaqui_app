"use client"

import Button from "@/components/Button/Button"
import "./FormAltaMuestra.css"
import { useState, useEffect } from "react"
import FormInput from "@/app/muestras/_components/Inputs/FormInput"
import LinkedSelects from "@/app/muestras/_components/LinkedSelects/LinkedSelects"
import FormSelect from "../FormSelect/FormSelect"
import { postMuestra } from "@/api/setMuestra"
import axios from "axios"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const GET_MUESTRAS = process.env.NEXT_PUBLIC_GET_MUESTRAS

export default function FormAltaMuestra({ selectObraSocial, selectTipos, selectServicios, selectSubtipos }) {
    // const [nombre, setNombre] = useState("")
    // const [apellido, setApellido] = useState("")
    // const [dni, setDni] = useState("")
    // const [obraSocial, setObraSocial] = useState("0")
    // const [puntoGeneracion, setPuntoGeneracion] = useState("0")
    // const [tipoMuestra, setTipoMuestra] = useState("0")
    // const [subtipoMuestra, setSubtipoMuestra] = useState("0")
    // const [medicoSolicitante, setMedicoSolicitante] = useState("")
    // const [preparador, setPreparador] = useState("")
    // const [frascos, setFrascos] = useState("")
    // const [material, setMaterial] = useState("")
    // const [localizacion, setLocalizacion] = useState("")
    // const [diagnostico, setDiagnostico] = useState("")
    // const [observaciones, setObservaciones] = useState("")



    const [msjError, setMsjError] = useState(null)

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        dni: '',
        obraSocialSelected: '',
        puntoGeneracionSelected: '',
        tipoMuestraSelected: '',
        subtipoMuestraSelected: '',
        medicoSolicitante: '',
        preparador: '',
        frascos: '',
        material: '',
        localizacion: '',
        diagnostico: '',
        observaciones: '',
    })

    const handleChange = (event) => {
        setMsjError(null);
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }


    // useEffect(() => {
        
    // }, [tipoMuestraSelected])
    

    console.log(formData);

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData)
        // if(formData.nombre == ''){
        //     setMsjError(response.errors);
        // }

        // const formData = new FormData()
        // try {
            // formData.append("apellido", apellido)
            // formData.append("nombre", nombre)
            // formData.append("dni", dni)
            // formData.append("obraSocial", obraSocial)
            // formData.append("puntoGeneracion", puntoGeneracion)
            // formData.append("tipoMuestra", tipoMuestra)
            // formData.append("subtipoMuestra", subtipoMuestra)
            // formData.append("frascos", frascos)
            // formData.append("material", material)
            // formData.append("localizacion", localizacion)
            // formData.append("diagnostico", diagnostico)
            // formData.append("observaciones", observaciones)

            // const response = await postMuestra(formData)
            // console.log(response)

        //     await axios.post(`${API_BASE_URL}/${GET_MUESTRAS}`, {
        //         nombre: nombre,
        //         apellido: apellido,
        //         dni: dni,
        //         obra_social: obraSocial,
        //         punto_generacion: puntoGeneracion,
        //         tipo_muestra_id: tipoMuestra,
        //         subtipo_muestra_id: subtipoMuestra,
        //         medico: medicoSolicitante,
        //         preparador: preparador,
        //         frascos: frascos,
        //         material: material,
        //         localizacion: localizacion,
        //         diagnostico: diagnostico,
        //         observaciones: observaciones
        //     })
        //     console.log("muestra creada")
        //     window.location.href = 'http://localhost:3000/muestras';
        // } catch (error) {
        //     console.error("Error al crear muestra", error)
        // }
    }

    return (
        <form className="form-datos-paciente" onSubmit={handleSubmit}>
            <div className="datos-container">
                <div className='d-flex justify-content-between align-items-center header div'>
                    <h5 className="fw-bold">Alta de Muestras</h5>
                    <Button type="submit" nombre="Guardar e Imprimir" color="verde" />
                </div>
                <div className="div">
                    <h6 className="fw-bold">Datos del Paciente</h6>
                    <div className="container-fluid">
                        <div className="row">
                            <FormInput
                                name="dni"
                                label="Dni"
                                type="number"
                                value={formData.dni}
                                onChange={handleChange}
                                placeholder="Escriba su DNI..."
                                col="3"
                            />
                            <FormInput
                                name="nombre"
                                label="Nombre"
                                type="text"
                                value={formData.nombre}
                                onChange={handleChange}
                                placeholder="Escriba su Nombre..."
                                col="3"
                            />
                            <span style={{color: 'red'}}>{msjError?.nombre ?? ''}</span>
                            <FormInput
                                name="apellido"
                                label="Apellido"
                                type="text"
                                value={formData.apellido}
                                onChange={handleChange}
                                placeholder="Escriba su Apellido..."
                                col="3"
                            />
                            <FormSelect
                                name="obraSocialSelected"
                                label="Obra Social"
                                type="text"
                                data={selectObraSocial ?? "Cargando..."}
                                value={formData?.obraSocialSelected}
                                onChange={handleChange}
                                placeholder="Seleccione Obra Social..."
                                col="3"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="datos-container mt-4">
                <div className="div">
                    <h6 className="fw-bold">Datos de la Muestra</h6>
                    <div className="row">
                        {/* <FormSelect
                            name="puntoGeneracion"
                            label="Punto de Generación"
                            type="text"
                            data={selectServicios}
                            value={formData?.puntoGeneracion ?? "Cargando..."}
                            onChange={()=>handleChange()}
                            placeholder="Seleccione punto..."
                            col="3"
                        /> */}
                        {/* <FormInput
                            name="medicoSolicitante"
                            label="Médico Solicitante"
                            type="text"
                            value={formData.medicoSolicitante}
                            onChange={()=>handleChange()}
                            placeholder="Escriba Nombre y Apellido..."
                            col="3"
                        /> */}
                        {/* <FormInput
                            name="preparador"
                            label="Preparador"
                            type="text"
                            value={formData.preparador}
                            onChange={()=>handleChange()}
                            placeholder="Escriba Nombre..."
                            col="2"
                        /> 
                        <FormInput
                            name="frascos"
                            label="Frascos"
                            type="number"
                            value={formData.frascos}
                            onChange={()=>handleChange()}
                            placeholder="Cant."
                            col="1"
                        />
                        */}
                        <div className="col-sm-12 col-md-6 col-lg-1">
                            <label htmlFor="radio" className="form-label">ATB</label>
                            <div className="d-flex flex-column">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Sí
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-2">
                            <label htmlFor="atb" className="form-label">Nombre ATB</label>
                            <input type="text" className="form-control" id="atb" placeholder="Nombre del ATB..." />
                        </div>
                    </div>
                    <div className="row">
                        {/* <LinkedSelects
                            data={selectTipos}
                            subtipos={selectSubtipos}
                            onChangeTipo={(e) => setTipoMuestra(e.target.value)}
                            onChangeSubtipo={(e) => setSubtipoMuestra(e.target.value)}
                        /> */}
                        {/* <FormInput
                            name="material"
                            label="Material"
                            type="text"
                            value={material}
                            onChange={(e) => setMaterial(e.target.value)}
                            placeholder="Datos del material remitido..."
                            col="3"
                        /> */}
                        {/* <FormInput
                            name="localizacion"
                            label="Localizacion"
                            type="text"
                            value={localizacion}
                            onChange={(e) => setLocalizacion(e.target.value)}
                            placeholder="Datos de Localización..."
                            col="3"
                        /> */}
                    </div>
                    <div className="row">
                        {/* <FormInput
                            name="diagnostico"
                            label="Diagnóstico Crítico Presuntivo"
                            type="text"
                            value={diagnostico}
                            onChange={(e) => setDiagnostico(e.target.value)}
                            placeholder="Diagnóstico Crítico Presuntivo..."
                            col="6"
                        /> */}
                        {/* <FormInput
                            name="observaciones"
                            label="Observaciones"
                            type="text"
                            value={observaciones}
                            onChange={(e) => setObservaciones(e.target.value)}
                            placeholder="Observaciones..."
                            col="6"
                        /> */}
                    </div>
                </div>
            </div>
        </form>
    )
}