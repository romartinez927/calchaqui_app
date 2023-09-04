import React from 'react'
import "./TrazabilidadSteps.css"

function SkeletonTrazabilidad() {
    return (
        <section className="step-wizard mt-5">
        <ul className="step-wizard-list">
            <li className="step-wizard-item">
                <span className="progress-count">1</span>
                <span className="progress-label">Generación Muestra</span>
            </li>
            <li className="step-wizard-item current-item">
                <span className="progress-count">2</span>
                <span className="progress-label">Egreso Muestra</span>
            </li>
            <li className="step-wizard-item">
                <span className="progress-count">3</span>
                <span className="progress-label">Ingreso Muestra</span>
            </li>
            <li className="step-wizard-item">
                <span className="progress-count">4</span>
                <span className="progress-label">Egreso Institución</span>
            </li>
            <li className="step-wizard-item">
                <span className="progress-count">4</span>
                <span className="progress-label">Recepción</span>
            </li>
            <li className="step-wizard-item">
                <span className="progress-count">4</span>
                <span className="progress-label">Entrega</span>
            </li>
        </ul>
    </section>
    )
}

export default SkeletonTrazabilidad