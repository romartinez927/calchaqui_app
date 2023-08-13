export const adaptarMuestraDesdeApi = (apiMuestra) => ({
    id: apiMuestra.id,
    nombre_muestra: apiMuestra.nombre_muestra,
    paciente_id: apiMuestra.paciente_id,
    tipo_muestra_id: apiMuestra.tipo_muestra_id
});
  
export const adaptarMuestraParaApi = (appMuestra) => ({
    id: appMuestra.id,
    nombre_muestra: appMuestra.nombre_muestra,
    paciente_id: appMuestra.paciente_id,
    tipo_muestra_id: appMuestra.tipo_muestra_id
});