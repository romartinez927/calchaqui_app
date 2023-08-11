const fetchPacientes = () => {
  return fetch("http://127.0.0.1:8000/api/pacientes")
    .then(res => res.json())
}

export default async function AltaMuestras() {
  const paciente = await fetchPacientes()
  return (
    <div>
      <p>{paciente[0].nombre}</p>
    </div>
  )
}
