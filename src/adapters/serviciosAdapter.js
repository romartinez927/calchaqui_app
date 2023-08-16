export const adaptarServicioDesdeApi = (apiServicio) => ({
    id: apiServicio.id,
    nombre: apiServicio.nombre,
    disponible: apiServicio.disponible,
});
  
export const adaptarServicioParaApi = (appServicio) => ({
    id: appServicio.id,
    nombre: appServicio.nombre,
    disponible: appServicio.disponible,
});