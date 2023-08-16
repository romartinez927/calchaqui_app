export const adaptarObraSocialDesdeApi = (apiObraSocial) => ({
    id: apiObraSocial.id,
    nombre: apiObraSocial.nombre,
    sigla: apiObraSocial.sigla,
    habilitado: apiObraSocial.habilitado
});
  
export const adaptarObraSocialParaApi = (appObraSocial) => ({
    id: appObraSocial.id,
    nombre: appObraSocial.nombre,
    sigla: appObraSocial.sigla,
    habilitado: appObraSocial.habilitado
});