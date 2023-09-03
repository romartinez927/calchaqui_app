"use client"

import Button from "@/components/Button/Button"
import "./FormAltaMuestra.css"
import { useState, useEffect, useRef } from "react"
import FormInput from "@/app/(dashboard)/muestras/_components/Inputs/FormInput"
import FormSelect from "../FormSelect/FormSelect"
import { postMuestra } from "@/api/muestras/setMuestra"
import { useRouter } from "next/navigation"
import { siteConfig } from '@/config/site'
import { getPacientePorDni } from "@/api/pacientes/getPacientePorDni"

export default function FormAltaMuestra({ selectObraSocial, selectTipos, selectServicios, selectSubtipos }) {
    const router = useRouter()
    const debounceRef = useRef()
    const [subtipos, setSubtipos] = useState(selectSubtipos)
    const [atbSeleccionado, setAtbSeleccionado] = useState(false);
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
        atb: '',
    })
    const [errors, setErrors] = useState(null)
    const [pacienteExistente, setPacienteExistente] = useState(false)

    const handleChange = (event) => {
        setErrors(null);
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleAtbSeleccionadoChange = (event) => {
        const seleccionado = event.target.id === "flexRadioDefault1";
        setAtbSeleccionado(seleccionado);
    };

    useEffect(() => {
        if (formData?.tipoMuestraSelected === '1') {
            const subtiposA = selectSubtipos.filter(subtipo => subtipo.tipoMuestra == 1);
            setSubtipos(subtiposA);
        } else if (formData?.tipoMuestraSelected === '2') {
            const subtiposB = selectSubtipos.filter(subtipo => subtipo.tipoMuestra == 2);
            setSubtipos(subtiposB);
        } else if (formData?.tipoMuestraSelected === '3') {
            const subtiposC = selectSubtipos.filter(subtipo => subtipo.tipoMuestra == 3);
            setSubtipos(subtiposC);
        } else {
            setSubtipos([]);
        }
    }, [formData?.tipoMuestraSelected])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await postMuestra(formData)
            // validar si esta todo ok y redirigir a la lista ver "response.ok"
            router.push(siteConfig.links.muestras)
        }
        catch (error) {
            if (error.response && error.response.status === 422) {
                setErrors(error.response.data.errors);
            } else {
                console.error('Error en la solicitud:', error);
            }
        }
    }

    console.log(subtipos)

    const onQueryChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }
        debounceRef.current = setTimeout(() => {
            if (value.length > 1) {
                envioPeticion(value)
            } else {
                console.log("no se encontro paciente");
            }
        }, 1000);
    };

    const envioPeticion = async (query) => {
        setPacienteExistente(false);
        const pacienteEncontrado = await getPacientePorDni(query); // Pasar query en lugar de dni
        console.log(pacienteEncontrado);
        if (pacienteEncontrado.length == 0) {
            console.log("dni no registrado");
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                nombre: pacienteEncontrado.nombre,
                apellido: pacienteEncontrado.apellido,
                obraSocialSelected: pacienteEncontrado.obraSocial,
            }))
            setPacienteExistente(true);
        }
    };

    return (
        <form className="form-datos-paciente needs-validation" noValidate onSubmit={handleSubmit}  >
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
                                onChange={onQueryChange}
                                error={errors?.dni ? errors?.dni[0] : null}
                                placeholder="Escriba su DNI..."
                                col="3"
                                errorTxt={errors?.dni}
                            />
                            <FormInput
                                name="nombre"
                                label="Nombre"
                                type="text"
                                value={formData.nombre}
                                onChange={handleChange}
                                placeholder="Escriba su Nombre..."
                                col="3"
                                errorTxt={errors?.nombre}
                                disabled={pacienteExistente}
                            />
                            <FormInput
                                name="apellido"
                                label="Apellido"
                                type="text"
                                value={formData.apellido}
                                onChange={handleChange}
                                placeholder="Escriba su Apellido..."
                                col="3"
                                errorTxt={errors?.apellido}
                                disabled={pacienteExistente}
                            />
                            <FormSelect
                                name="obraSocialSelected"
                                label="Obra Social"
                                type="text"
                                data={selectObraSocial ?? "Cargando..."}
                                value={pacienteExistente? 0 : formData?.obraSocialSelected}
                                onChange={handleChange}
                                placeholder={pacienteExistente? formData.obraSocialSelected : "Seleccione Obra Social..."}
                                col="3"
                                errorTxt={errors?.obra_social}
                                disabled={pacienteExistente}
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
                            name="puntoGeneracionSelected"
                            label="Punto de Generación"
                            type="text"
                            data={selectServicios}
                            value={formData?.puntoGeneracionSelected ?? "Cargando..."}
                            onChange={handleChange}
                            placeholder="Seleccione punto..."
                            col="3"
                            errorTxt={errors?.punto_generacion}
                        />
                        <FormInput
                            name="medicoSolicitante"
                            label="Médico Solicitante"
                            type="text"
                            value={formData.medicoSolicitante}
                            onChange={handleChange}
                            placeholder="Escriba Nombre y Apellido..."
                            col="3"
                            errorTxt={errors?.medico}
                        />
                        <FormInput
                            name="preparador"
                            label="Preparador"
                            type="text"
                            value={formData.preparador}
                            onChange={handleChange}
                            placeholder="Escriba Nombre..."
                            col="2"
                            errorTxt={errors?.preparador}
                        />
                        <FormInput
                            name="frascos"
                            label="Frascos"
                            type="number"
                            value={formData.frascos}
                            onChange={handleChange}
                            placeholder="Cant."
                            col="1"
                            errorTxt={errors?.frascos}
                        />

                        <div className="col-sm-12 col-md-6 col-lg-1">
                            <label htmlFor="radio" className="form-label pt-2 atb">ATB</label>
                            <div className="d-flex flex-xl-column">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={handleAtbSeleccionadoChange} />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Sí
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={handleAtbSeleccionadoChange} />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2" >
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-2">
                            <label htmlFor="atb" className="form-label pt-2">Nombre ATB</label>
                            <input type="text" className="form-control" name="atb" value={formData.atb} onChange={handleChange} id="atb" placeholder="Nombre del ATB..." disabled={!atbSeleccionado} />
                        </div>
                    </div>
                    <div className="row">
                        <FormSelect
                            name="tipoMuestraSelected"
                            label="Tipo"
                            type="text"
                            data={selectTipos}
                            value={formData?.tipoMuestraSelected ?? "Cargando..."}
                            onChange={handleChange}
                            placeholder="Seleccione tipo..."
                            col="3"
                            errorTxt={errors?.tipo_muestra_id}
                        />
                        <FormSelect
                            name="subtipoMuestraSelected"
                            label="Subtipo"
                            type="text"
                            data={subtipos}
                            value={formData?.subtipoMuestraSelected ?? "Cargando..."}
                            onChange={handleChange}
                            placeholder="Seleccione subtipo..."
                            col="3"
                            disabled={formData?.tipoMuestraSelected == 0}
                            errorTxt={errors?.subtipo_muestra_id}
                        />
                        <FormInput
                            name="material"
                            label="Material"
                            type="text"
                            value={formData.material}
                            onChange={handleChange}
                            placeholder="Datos del material remitido..."
                            col="3"
                            errorTxt={errors?.material}
                        />
                        <FormInput
                            name="localizacion"
                            label="Localizacion"
                            type="text"
                            value={formData.localizacion}
                            onChange={handleChange}
                            placeholder="Datos de Localización..."
                            col="3"
                            errorTxt={errors?.localizacion}
                        />
                    </div>
                    <div className="row">
                        <FormInput
                            name="diagnostico"
                            label="Diagnóstico Crítico Presuntivo"
                            type="text"
                            value={formData.diagnostico}
                            onChange={handleChange}
                            placeholder="Diagnóstico Crítico Presuntivo..."
                            col="6"
                            errorTxt={errors?.diagnostico}
                        />
                        <FormInput
                            name="observaciones"
                            label="Observaciones"
                            type="text"
                            value={formData.observaciones}
                            onChange={handleChange}
                            placeholder="Observaciones..."
                            col="6"
                            errorTxt={errors?.observaciones}
                        />
                    </div>
                </div>
            </div>
        </form>
    )
}