"use client"

import Button from "@/components/Button/Button"
import "./FormDatosPaciente.css"
import { useState } from "react"
import FormInput from "@/components/FormInput/FormInput"
import FormSelect from "@/components/FormSelect/FormSelect"
import axios from "axios"
import LinkedSelects from "@/components/LinkedSelects/LinkedSelects"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const GET_MUESTRAS = process.env.NEXT_PUBLIC_GET_MUESTRAS

export default function FormDatosPaciente({selectObraSocial, selectTipos, selectServicios, selectSubtipos}) {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [dni, setDni] = useState("")
    const [obraSocial, setObraSocial] = useState("0")
    const [puntoGeneracion, setPuntoGeneracion] = useState("0")
    const [tipoMuestra, setTipoMuestra] = useState("0")
    const [subtipoMuestra, setSubtipoMuestra] = useState("0")
    const [medicoSolicitante, setMedicoSolicitante] = useState("")
    const [preparador, setPreparador] = useState("")
    const [frascos, setFrascos] = useState("")
    const [material, setMaterial] = useState("")
    const [localizacion, setLocalizacion] = useState("")
    const [diagnostico, setDiagnostico] = useState("")
    const [observaciones, setObservaciones] = useState("")

    const store = async (e) => {
        e.preventDefault();
        await axios.post(`${API_BASE_URL}/${GET_MUESTRAS}`, {
            nombre: nombre, 
            apellido: apellido, 
            dni: dni, 
            obra_social: obraSocial, 
            punto_generacion: puntoGeneracion, 
            tipo_muestra_id: tipoMuestra,
            subtipo_muestra_id: subtipoMuestra,
            // medico_solicitante: medicoSolicitante,
            frascos: frascos,
            material: material,
            localizacion: localizacion,
            diagnostico: diagnostico,
            observaciones: observaciones
        })

    }

    return (
        <form className="form-datos-paciente" onSubmit={store}>
            <div className="datos-container">
                <div className='d-flex justify-content-between align-items-center header div'>
                    <h5 className="fw-bold">Alta de Muestras</h5>
                    <Button type="submit" nombre="Guardar e Imprimir" color="verde"/>
                </div>
                <div className="div">
                    <h6 className="fw-bold">Datos del Paciente</h6>
                    <div className="container-fluid">
                        <div className="row">
                            <FormInput 
                                name="dni"
                                label="Dni"
                                type="number"
                                value={dni}
                                onChange={ (e)=> setDni(e.target.value)}
                                placeholder="Escriba su DNI..."
                                col="3" 
                            />
                            <FormInput 
                                name="nombre"
                                label="Nombre"
                                type="text"
                                value={nombre}
                                onChange={ (e)=> setNombre(e.target.value)}
                                placeholder="Escriba su Nombre..."
                                col="3" 
                            />
                            <FormInput 
                                name="apellido"
                                label="Apellido"
                                type="text"
                                value={apellido}
                                onChange={ (e)=> setApellido(e.target.value)}
                                placeholder="Escriba su Apellido..."
                                col="3" 
                            />
                            <FormSelect
                                name="obraSocial"
                                label="Obra Social"
                                type="text"
                                data={selectObraSocial}
                                value={obraSocial}
                                onChange={ (e)=> setObraSocial(e.target.value)}
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
                        <FormSelect
                            name="puntoGeneracion"
                            label="Punto de Generación"
                            type="text"
                            data={selectServicios}
                            value={puntoGeneracion}
                            onChange={ (e)=> setPuntoGeneracion(e.target.value)}
                            placeholder="Seleccione punto..."
                            col="3"
                        />
                        <FormInput 
                            name="medicoSolicitante"
                            label="Médico Solicitante"
                            type="text"
                            value={medicoSolicitante}
                            onChange={ (e)=> setMedicoSolicitante(e.target.value)}
                            placeholder="Escriba Nombre y Apellido..."
                            col="3" 
                        />
                        <FormInput 
                            name="preparador"
                            label="Preparador"
                            type="text"
                            value={preparador}
                            onChange={ (e)=> setPreparador(e.target.value)}
                            placeholder="Escriba Nombre..."
                            col="2" 
                        />
                        <FormInput 
                            name="frascos"
                            label="Frascos"
                            type="number"
                            value={frascos}
                            onChange={ (e)=> setFrascos(e.target.value)}
                            placeholder="Cant."
                            col="1" 
                        />
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
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
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
                        <LinkedSelects 
                            data={selectTipos}
                            subtipos={selectSubtipos}
                            onChangeTipo={ (e)=> setTipoMuestra(e.target.value)}
                            onChangeSubtipo={ (e)=> setSubtipoMuestra(e.target.value)}
                        />
                        <FormInput 
                            name="material"
                            label="Material"
                            type="text"
                            value={material}
                            onChange={ (e)=> setMaterial(e.target.value)}
                            placeholder="Datos del material remitido..."
                            col="3" 
                        />
                        <FormInput 
                            name="localizacion"
                            label="Localizacion"
                            type="text"
                            value={localizacion}
                            onChange={ (e)=> setLocalizacion(e.target.value)}
                            placeholder="Datos de Localización..."
                            col="3" 
                        />
                    </div>
                    <div className="row">
                        <FormInput 
                            name="diagnostico"
                            label="Diagnóstico Crítico Presuntivo"
                            type="text"
                            value={diagnostico}
                            onChange={ (e)=> setDiagnostico(e.target.value)}
                            placeholder="Diagnóstico Crítico Presuntivo..."
                            col="6" 
                        />
                        <FormInput 
                            name="observaciones"
                            label="Observaciones"
                            type="text"
                            value={observaciones}
                            onChange={ (e)=> setObservaciones(e.target.value)}
                            placeholder="Observaciones..."
                            col="6" 
                        />
                    </div>
                </div>
            </div>
        </form>
    )
}