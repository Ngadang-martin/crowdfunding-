import React from 'react'

const HeroSection = () => {
    return (
        <div>
               <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                            <h1>Raising Money has never been this simple</h1>
                            <h2>Ideas come true in Our campaigns. This is where the creator shares his vision and creativity with the public who mobilize and finance his project</h2>
                            <div className="d-lg-flex">
                                <a href="projectlist" className="btn-get-started scrollto">Explore Projects</a>
                                <a href="/dashboard" className="venobox btn-get-started" data-vbtype="video" data-autoplay="true">Start a Project<i className="icofont-play-alt-2"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                            <img src="assets/images/hero/hero-img copy.png" className="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroSection
