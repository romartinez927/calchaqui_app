import { getObrasSociales } from '@/api/getObrasSociales'
import { getServicios } from '@/api/getServicios'
import { getSubtipos } from '@/api/getSubtipos'
import { getTipos } from '@/api/getTipos'
import FormAltaMuestra from '@/app/muestras/_components/Form/FormAltaMuestra'
import React from 'react'
import "./alta.css"

async function AltaMuestras() {
    const selectObraSocial = await getObrasSociales()
    const selectTipos = await getTipos()
    const selectServicios = await getServicios()
    const selectSubtipos = await getSubtipos()

  return (
    <main className='alta-muestras'>
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