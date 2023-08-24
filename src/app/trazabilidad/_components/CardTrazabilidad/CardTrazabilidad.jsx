import React from 'react'

function CardTrazabilidad() {
  return (
    <div className="card-trazabilidad">
            <div className="border-blue"></div>
            <div className="card-body">
                <div className="d-flex flex-column my-auto">
                    <h6>Tipo</h6>
                    <p>{muestra.tipo_muestra?.nombre}</p>
                    <h6>Subtipo</h6>
                    <p>{muestra.subtipo_muestra?.nombre}</p>
                    <h6>Cantidad de Frascos: {muestra.frascos}</h6>
                    <h6>ATB</h6>
                    <p>{muestra.atb}</p>
                </div>
            </div>
        </div>
  )
}

export default CardTrazabilidad