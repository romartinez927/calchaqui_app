import React from 'react'

function Skeleton() {
    return (
        <div className="col movie--isloading pt-4 datos">
            <div className="loading-content">
                <div className="loading-text-container d-flex flex-column gap-4">
                    <div className="loading-main-text m-auto"></div>
                    <div className="loading-main-text m-auto"></div>
                    <div className="loading-main-text m-auto"></div>
                    <div className="loading-main-text m-auto"></div>
                </div>
            </div>
        </div>
    )
}

export default Skeleton