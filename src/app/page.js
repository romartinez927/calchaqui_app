import { getObrasSociales } from "@/api/getObrasSociales"
import "./home.css"
import FormDatosPaciente from '@/components/Home/FormDatosPaciente/FormDatosPaciente'
import { getTipos } from "@/api/getTipos"
import { getSubtipos } from "@/api/getSubtipos"
import { getServicios } from "@/api/getServicios"

export default async function Home() {
  const selectObraSocial = await getObrasSociales()
  const selectTipos = await getTipos()
  const selectServicios = await getServicios()
  const selectSubtipos = await getSubtipos()

  return (
    <main className='home'>
      <FormDatosPaciente 
        selectObraSocial={selectObraSocial} 
        selectTipos={selectTipos}
        selectServicios={selectServicios}
        selectSubtipos={selectSubtipos}
      />
    </main>
  )
}
