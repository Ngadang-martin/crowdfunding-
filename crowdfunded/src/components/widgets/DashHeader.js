import React from 'react'

const DashHeader = ({ title, item, destination }) => (
    <div className="page-header">
        <h3 className="page-title"> {title}</h3>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">{item}</li>
                <li className="breadcrumb-item active" aria-current="page">{destination}</li>
            </ol>
        </nav>
    </div>
)

export default DashHeader
