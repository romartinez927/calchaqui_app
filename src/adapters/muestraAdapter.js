export const adaptarMuestraDesdeApi = (apiMuestra) => ({
    id: apiMuestra.id,
    puntoGeneracion: apiMuestra.puntoGeneracion,
    tipoMuestra: apiMuestra.tipoMuestra,
    subtipoMuestra: apiMuestra.subtipoMuestra,
    frascos: apiMuestra.frascos,
    material: apiMuestra.material,
    medico: apiMuestra.medico,
    preparador: apiMuestra.preparador,
    localizacion: apiMuestra.localizacion,
    diagnostico: apiMuestra.diagnostico,
    observaciones: apiMuestra.observaciones,
    paciente: apiMuestra.paciente,
    fechaAlta: apiMuestra.created_at
});
  
export const adaptarMuestraParaApi = (appMuestra) => ({
    id: appMuestra.id,
    nombre: appMuestra.nombre,
    apellido: appMuestra.apellido,
    dni: appMuestra.dni,
    obra_social: appMuestra.obraSocial,
    punto_generacion: appMuestra.puntoGeneracion,
    tipo_muestra_id: appMuestra.tipoMuestra,
    subtipo_muestra_id: appMuestra.subtipoMuestra,
    frascos: appMuestra.frascos,
    material: appMuestra.material,
    medico: appMuestra.medico,
    preparador: appMuestra.preparador,
    localizacion: appMuestra.localizacion,
    diagnostico: appMuestra.diagnostico,
    observaciones: appMuestra.observaciones,
});