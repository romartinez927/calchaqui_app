export const adaptarPuntoDeControlDesdeApi = (apiPuntoDeControl) => ({
    id: apiPuntoDeControl.id,
    nombre: apiPuntoDeControl.nombre,
    disponible: apiPuntoDeControl.disponible,
    orden: apiPuntoDeControl.orden,
});
  
export const adaptarPuntoDeControlParaApi = (appPuntoDeControl) => ({
    id: appPuntoDeControl.id,
    nombre: appPuntoDeControl.nombre,
    disponible: appPuntoDeControl.disponible,
    orden: appPuntoDeControl.orden,
});