import React from 'react'
import {Link} from 'react-router-dom'
const Sidebar = () => {
    return (
        <div className="container-scroller">
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    <li className="nav-item nav-profile">
                        <Link to="" className="nav-link">
                            <div className="nav-profile-image">
                                {/* <img src="assets/images/faces/face1.jpg" alt="profile" /> */}
                                <span className="login-status online"></span>
                                {/* <!--change to offline or busy as needed--> */}
                            </div>
                            <div className="nav-profile-text d-flex flex-column">
                                {/* <span className="font-weight-bold mb-2">David Grey. H</span> */}
                                {/* <span className="text-secondary text-small">Project Manager</span> */}
                            </div>
                            {/* <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i> */}
                       </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">
                            <span className="menu-title">Dashboard</span>
                            <i className="mdi mdi-home menu-icon"></i>
                       </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                            <span className="menu-title">Project Editor</span>
                            <i className="menu-arrow"></i>
                            <i className="mdi mdi-crosshairs-gps menu-icon"></i>
                       </a>
                        <div className="collapse" id="ui-basic">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <Link className="nav-link" to="/basics">Basics</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/reward">Reward</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/content">Content</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/team">Team</Link></li>
                                <li className="nav-item"> <Link className="nav-link" to="/funding">Funding</Link></li>
                                {/* <li className="nav-item"> <Link className="nav-link" to="/#">Settings</Link></li> */}
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/prelaunch">
                            <span className="menu-title">PreLaunche</span>
                            <i className="mdi mdi-table-large menu-icon"></i>
                       </Link>
                    </li>
                    <li className="nav-item sidebar-actions">
                        <span className="nav-link">
                            <div className="border-bottom">
                                <h6 className="font-weight-normal mb-3">Projects</h6>
                            </div>
                            <button className="btn btn-block btn-lg btn-gradient-primary mt-4">Documentation</button>
                        </span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
