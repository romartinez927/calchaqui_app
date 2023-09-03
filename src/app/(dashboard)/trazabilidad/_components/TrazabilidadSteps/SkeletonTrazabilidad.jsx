import React from 'react'
import "./TrazabilidadSteps.css"

function SkeletonTrazabilidad() {
    return (
        <section class="step-wizard mt-5">
        <ul class="step-wizard-list">
            <li class="step-wizard-item">
                <span class="progress-count">1</span>
                <span class="progress-label">Generación Muestra</span>
            </li>
            <li class="step-wizard-item current-item">
                <span class="progress-count">2</span>
                <span class="progress-label">Egreso Muestra</span>
            </li>
            <li class="step-wizard-item">
                <span class="progress-count">3</span>
                <span class="progress-label">Ingreso Muestra</span>
            </li>
            <li class="step-wizard-item">
                <span class="progress-count">4</span>
                <span class="progress-label">Egreso Institución</span>
            </li>
            <li class="step-wizard-item">
                <span class="progress-count">4</span>
                <span class="progress-label">Recepción</span>
            </li>
            <li class="step-wizard-item">
                <span class="progress-count">4</span>
                <span class="progress-label">Entrega</span>
            </li>
        </ul>
    </section>
    )
}

export default SkeletonTrazabilidad