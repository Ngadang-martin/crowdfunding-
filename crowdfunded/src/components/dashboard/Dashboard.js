import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

const Dashboard = () => {
    return (
        <div  className="container-scroller">
            <Header/>
            <Sidebar/>
            <div className="main-panel">
            
                <div className="content-wrapper">
                    
                    <div className="page-header">
                        <h3 className="page-title">
                            <span className="page-title-icon bg-gradient-primary text-white mr-2">
                                <i className="mdi mdi-home"></i>
                            </span> Dashboard
                        </h3>
                        <nav aria-label="breadcrumb">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item active" aria-current="page">
                                    <span></span>Overview <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="row">
                        <div className="col-md-4 stretch-card grid-margin">
                            <div className="card bg-gradient-danger card-img-holder text-white">
                                <div className="card-body">
                                    <img src="assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle_image1" />
                                    <h4 className="font-weight-normal mb-3">Weekly Sales <i className="mdi mdi-chart-line mdi-24px float-right"></i>
                                    </h4>
                                    <h2 className="mb-5">$ 15,0000</h2>
                                    <h6 className="card-text">Increased by 60%</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 stretch-card grid-margin">
                            <div className="card bg-gradient-info card-img-holder text-white">
                                <div className="card-body">
                                    <img src="assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image2" />
                                    <h4 className="font-weight-normal mb-3">Weekly Orders <i className="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                                    </h4>
                                    <h2 className="mb-5">45,6334</h2>
                                    <h6 className="card-text">Decreased by 10%</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 stretch-card grid-margin">
                            <div className="card bg-gradient-success card-img-holder text-white">
                                <div className="card-body">
                                    <img src="assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image3" />
                                    <h4 className="font-weight-normal mb-3">Visitors Online <i className="mdi mdi-diamond mdi-24px float-right"></i>
                                    </h4>
                                    <h2 className="mb-5">95,5741</h2>
                                    <h6 className="card-text">Increased by 5%</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <div className="clearfix">
                                        <h4 className="card-title float-left">Visit And Sales Statistics</h4>
                                        <div id="visit-sale-chart-legend" className="rounded-legend legend-horizontal legend-top-right float-right"></div>
                                    </div>
                                    <canvas id="visit-sale-chart" className="mt-4"></canvas>
                                </div>
                            </div> 
                        </div>
                        <div className="col-md-5 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Traffic Sources</h4>
                                    <canvas id="traffic-chart"></canvas>
                                    <div id="traffic-chart-legend" className="rounded-legend legend-vertical legend-bottom-left pt-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 grid-margin">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Recent Tickets</h4>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th> Assignee </th>
                                                    <th> Subject </th>
                                                    <th> Status </th>
                                                    <th> Last Update </th>
                                                    <th> Tracking ID </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/faces/face1.jpg" className="mr-2" alt="image4" /> David Grey
                                                    </td>
                                                    <td> Fund is not recieved </td>
                                                    <td>
                                                        <label className="badge badge-gradient-success">DONE</label>
                                                    </td>
                                                    <td> Dec 5, 2017 </td>
                                                    <td> WD-12345 </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/faces/face2.jpg" className="mr-2" alt="image3" /> Stella Johnson
                                                    </td>
                                                    <td> High loading time </td>
                                                    <td>
                                                        <label className="badge badge-gradient-warning">PROGRESS</label>
                                                    </td>
                                                    <td> Dec 12, 2017 </td>
                                                    <td> WD-12346 </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/faces/face3.jpg" className="mr-2" alt="image2" /> Marina Michel
                                                    </td>
                                                    <td> Website down for one week </td>
                                                    <td>
                                                        <label className="badge badge-gradient-info">ON HOLD</label>
                                                    </td>
                                                    <td> Dec 16, 2017 </td>
                                                    <td> WD-12347 </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="assets/images/faces/face4.jpg" className="mr-2" alt="image1" /> John Doe
                                                    </td>
                                                    <td> Loosing control on server </td>
                                                    <td>
                                                        <label className="badge badge-gradient-danger">REJECTED</label>
                                                    </td>
                                                    <td> Dec 3, 2017 </td>
                                                    <td> WD-12348 </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
               
              <Footer/>
               
            </div>
            
        </div>
    )
}

export default Dashboard
