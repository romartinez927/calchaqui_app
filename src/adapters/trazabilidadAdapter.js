export const adaptarTrazabilidadDesdeApi = (apiTrazabilidad) => ({
    id: apiTrazabilidad.id,
    model_type: apiTrazabilidad.model_type,
    model_id: apiTrazabilidad.model_id,
    recibido_por: apiTrazabilidad.recibido_por,
    entregado_por: apiTrazabilidad.entregado_por,
    url_informe: apiTrazabilidad.url_informe,
    punto_de_control_id: apiTrazabilidad.punto_de_control_id,
    fecha: apiTrazabilidad.created_at,
    muestra: apiTrazabilidad.muestra,
});
  
export const adaptarTrazabilidadParaApi = (appTrazabilidad) => ({
    model_id: appTrazabilidad.model_id,
    recibido_por: appTrazabilidad.recibido_por,
    entregado_por: appTrazabilidad.entregado_por,
    url_informe: appTrazabilidad.url_informe,
});