import React from 'react'
import {Link} from 'react-router-dom'

const Content = ({ category, projects }) => {
    return (
        <div>
            <section id="services" className="services section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>CATEGORIES</h2>
                        <p>Which category interest you ?</p>
                        <p>Discover projects just for you and get great recommendations when you select your interests.</p>
                    </div>

                    <div className="row">
                        {category.map((cat) => (
                            <div key={cat.id} className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                    <h4><Link to="#">{cat.category}</Link></h4>
                                    <p>{cat.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="services section-bg section-space">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title style2 text-center">
                                <div className="section-top">
                                    <h1><span>Projects</span><b>Trending Campaigns</b></h1><h4>This projects are the most in view</h4>
                                </div>
                                <div className="section-bottom">
                                    <div className="text-style-two">
                                        <p>Our mission is to enable creative projects to see the light of day. We are convinced that art and creative expression are essential for a vibrant and flourishing society, and that creative spaces need protection.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    {projects.map((project) => (
                        <div key={project.id} className="col-lg-4 col-md-4 col-16">
                            <div className="single-service">
                                <Link to={`/details/${project.id}`}>
                                    <div className="main-view-img">
                                        <img src={project.image} alt="#" />
                                    </div>
                                    <div className="ribbons bg-brand">New</div>
                                    <div className="service-content">
                                        <h4>{project.title}</h4>
                                        <p>{project.description}</p>
                                        <p className="cat-pad">{project.Category.category}</p>
                                        <div className="project_sise_price">
                                            <h6><b>$0 </b>FCFA raised</h6>
                                            <div className="product-qty">
                                                <h6>0 Backers</h6>
                                            </div>
                                        </div>
                                        <div className="progress mb-3">
                                            <div className="progress-bar" role="progressbar" style={{ width: `0%` }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="project-day-left">
                                            <h6>26 days left</h6>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Content