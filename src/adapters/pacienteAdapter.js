export const adaptarPacienteDesdeApi = (apiPaciente) => ({
    id: apiPaciente?.id,
    nombre: apiPaciente?.nombre,
    apellido: apiPaciente?.apellido,
    dni: apiPaciente?.dni,
    obraSocial: apiPaciente?.obra_social
});
  
export const adaptarPacienteParaApi = (appPaciente) => ({
    id: appPaciente.id,
    nombre: appPaciente.nombre,
    apellido: appPaciente.apellido,
    dni: appPaciente.dni
});