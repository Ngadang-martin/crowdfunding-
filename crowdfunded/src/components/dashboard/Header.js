import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../state/actions/AuthActions'
import {Link} from 'react-router-dom'
const Header = () => {
  const id = window.localStorage.getItem('id')
  const dispatch = useDispatch()
  const user = useSelector(state => state.authReducer.userInfo)
  useEffect(() => {
     dispatch(getUser(id))
  }, [dispatch, id])
    return (
        <div className="">
            <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                    <Link className="navbar-brand brand-logo" to="/dashboard"><img src="assets/images/logo.svg" alt="logo" /></Link>
                    <Link className="navbar-brand brand-logo-mini" to="/dashboard"><img src="assets/images/logo-mini.svg" alt="logo" /></Link>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-stretch">
                    <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                        <span className="mdi mdi-menu"></span>
                    </button>
                   
                    <ul className="navbar-nav navbar-nav-right">
                        <li className="nav-item nav-profile dropdown">
                            <Link className="nav-link dropdown-toggle" id="profileDropdown" to="#" data-toggle="dropdown" aria-expanded="false">
                                <div className="nav-profile-img">
                                {user.avatar? <img src={user.avatar} alt="avatar_image" /> : <img src="assets/images/faces-clipart/pic-1.png" alt="user avatar-default"/>}
                                    <span className="availability-status online"></span>
                                </div>
                                <div className="nav-profile-text">
                                    <p className="mb-1 text-black"  style={{ textTransform: "capitalize" }}>{user.username}</p>
                                </div>
                            </Link>
                            <div className="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
                               
                                <Link className="dropdown-item" to="/logout">
                                    <i className="mdi mdi-logout mr-2 text-primary"></i> Logout </Link>
                            </div>
                        </li>
                        <li className="nav-item d-none d-lg-block full-screen-link">
                            <Link to="" className="nav-link">
                                <i className="mdi mdi-fullscreen" id="fullscreen-button"></i>
                            </Link>
                        </li> 
                        {/* <li className="nav-item dropdown">
                            <Link to="" className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" data-toggle="dropdown">
                                <i className="mdi mdi-bell-outline"></i>
                                <span className="count-symbol bg-danger"></span>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                                <h6 className="p-3 mb-0">Notifications</h6>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-success">
                                            <i className="mdi mdi-calendar"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                        <h6 className="preview-subject font-weight-normal mb-1">Event today</h6>
                                        <p className="text-gray ellipsis mb-0"> Just a reminder that you have an event today </p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <Link to="" className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-warning">
                                            <i className="mdi mdi-settings"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                        <h6 className="preview-subject font-weight-normal mb-1">Settings</h6>
                                        <p className="text-gray ellipsis mb-0"> Update dashboard </p>
                                    </div>
                                </Link>
                                <div className="dropdown-divider"></div>
                                <Link to="" className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-info">
                                            <i className="mdi mdi-link-variant"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                        <h6 className="preview-subject font-weight-normal mb-1">Launch Admin</h6>
                                        <p className="text-gray ellipsis mb-0"> New admin wow! </p>
                                    </div>
                                </Link>
                                <div className="dropdown-divider"></div>
                                <h6 className="p-3 mb-0 text-center">See all notifications</h6>
                            </div> */}
                        {/* </li> */}
                      
                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                        <span className="mdi mdi-menu"></span>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Header
