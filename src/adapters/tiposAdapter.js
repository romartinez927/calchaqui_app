export const adaptarTipoDesdeApi = (apiTipo) => ({
    id: apiTipo.id,
    nombre: apiTipo.nombre,
    disponible: apiTipo.disponible,
});
  
export const adaptarTipoParaApi = (appTipo) => ({
    id: appTipo.id,
    nombre: appTipo.nombre,
    disponible: appTipo.disponible,
});