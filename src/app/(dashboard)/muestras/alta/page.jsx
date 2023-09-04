import { getObrasSociales } from '@/api/obras_sociales/getObrasSociales'
import { getServicios } from '@/api/servicios/getServicios'
import { getSubtipos } from '@/api/muestras/getSubtipos'
import { getTipos } from '@/api/muestras/getTipos'
import FormAltaMuestra from '@/app/(dashboard)/muestras/_components/Form/FormAltaMuestra'
import React from 'react'
import "./alta.css"

async function AltaMuestras() {
    const selectObraSocial = await getObrasSociales()
    const selectTipos = await getTipos()
    const selectServicios = await getServicios()
    const selectSubtipos = await getSubtipos()

    return (
        <main className='alta-muestras mt-2'>
            <FormAltaMuestra
                selectObraSocial={selectObraSocial}
                selectTipos={selectTipos}
                selectServicios={selectServicios}
                selectSubtipos={selectSubtipos}
            />
        </main>
    )
}

export default AltaMuestras