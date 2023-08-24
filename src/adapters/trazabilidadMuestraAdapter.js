export const adaptarTrazabilidadMuestraDesdeApi = (apiTrazabilidad) => ({
    id: apiTrazabilidad.id,
    puntoDeControlId: apiTrazabilidad.punto_de_control_id,
    recibidoPor: apiTrazabilidad.recibido_por,
    entregadoPor: apiTrazabilidad.entregado_por,
    urlInforme: apiTrazabilidad.url_informe,
    fechaHora: apiTrazabilidad.created_at,
    actualizado: apiTrazabilidad.updated_at
});

export const adaptarTrazabilidadMuestraParaApi = (appTrazabilidad) => ({
    id : appTrazabilidad.id,
    punto_de_control_id : appTrazabilidad.puntoDeControlId,
    recibido_por : appTrazabilidad.recibidoPor,
    entregado_por : appTrazabilidad.entregadoPor,
    url_informe : appTrazabilidad.urlInforme,
});