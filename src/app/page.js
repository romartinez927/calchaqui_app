import Image from 'next/image'
import "./home.css"
import FormDatosPaciente from '@/components/Home/FormDatosPaciente/FormDatosPaciente'

export default function Home() {
  return (
    <main>
      <FormDatosPaciente/>
    </main>
  )
}
