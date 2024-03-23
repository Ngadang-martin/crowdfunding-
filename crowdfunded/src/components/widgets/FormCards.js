import React from 'react'
import Footer from '../dashboard/Footer'

const FormCards = ({title, description}) => (
    <div>
        <div className="main-panel">
            <div className="content-wrapper">

                <div className="col-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">{title}</h4>
                            <p className="card-description"> {description} </p>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </div>
)
export default FormCards
