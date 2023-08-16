export const adaptarSubtipoDesdeApi = (apiSubtipo) => ({
    id: apiSubtipo.id,
    nombre: apiSubtipo.nombre,
    disponible: apiSubtipo.disponible,
    tipoMuestra: apiSubtipo.tipo_muestra_id
});
  
export const adaptarSubtipoParaApi = (appSubtipo) => ({
    id: appSubtipo.id,
    nombre: appSubtipo.nombre,
    disponible: appSubtipo.disponible,
    tipoMuestra: appSubtipo.tipo_muestra_id
});