import React from 'react'
import {Link } from 'react-router-dom'

// import './main.css'

const Header = ({category}) => {
    return (
        <div>
            {/* <!-- ======= Header ======= --> */}
            <header id="header" className="fixed-top ">
                <div className="container d-flex align-items-center">
                    <h1 className="logo mr-auto"><Link to="/">Arsha</Link></h1>
                    {/* <!-- Uncomment below if you prefer to use an image logo --> */}
                    <Link to="index.html" className="logo mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid" /></Link>
                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li className="active"><Link to="/">Home</Link></li>  
                            <li><Link to="#about">About Us</Link></li>
                            <li><Link to="#services">News</Link></li>
                            <li className="drop-down"><Link to="#">Explore</Link>
                                <ul>
                                    <li><Link to="#">Projects</Link></li>
                                    <li className="drop-down"><Link to="#">Categories</Link>
                                        <ul>
                                            {category.map((cat) => (
                                            <li key={cat.id}><Link to="#">{cat.category}</Link></li>
                                            ))}
                                        </ul>
                                    </li>
                                    <li><Link to="#">Documentation</Link></li>
                                    <li><Link to="#">Policies</Link></li>      
                                </ul>
                            </li>
                            <li><Link to="#contact">Contact Us</Link></li>
                        </ul>
                    </nav>
                    <Link to="/signin" className="get-started-btn scrollto">Login</Link>
                </div>
            </header>
        </div>
    ) 
} 
export default Header
