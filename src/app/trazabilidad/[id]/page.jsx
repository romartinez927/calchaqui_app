
import React from 'react'
import "../trazabilidad.css"
import TrazabilidadMuestraContainer from '../_components/TrazabilidadMuestraContainer/TrazabilidadMuestraContainer'
import TrazabilidadHeader from '../_components/TrazabilidadHeader/TrazabilidadHeader'

function page({ params }) {
    return (
        <main id="trazabilidad" className="container-fluid">
            <TrazabilidadHeader/>
            <TrazabilidadMuestraContainer id={params.id}/>
        </main>
    )
}

export default page