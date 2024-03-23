import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProjectFunding, getUserProject } from '../../../state/actions/ProjectAction'
import {Link} from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'
import Sidebar from '../Sidebar'
const PreLaunch = () => {
    const dispatch = useDispatch()
    const id = window.localStorage.getItem('id')
    const user = useSelector(state => state.authReducer.userInfo)
    const project = useSelector(state => state.projectReducer.project)
    const funding = useSelector(state => state.projectReducer.funding)
    const projectId = project.id
    useEffect(() => {
        dispatch(getUserProject(id))
        dispatch(getProjectFunding(projectId))
    }, [dispatch, id, projectId])
    return (
        <div className="container-scroller">
            <Header />
            <Sidebar />
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="card">
                        <div className="card-horizontal" style={{ display: "flex", flex: "1 1 auto" }}>
                                <div className="project-img-preview">
                                    {project.image? <img className="" src={project.image} alt="Project Image1" /> : <img src="assets/images/statics/logo.png" alt="user avatar-default"/>}
                                </div>
                            <div className="card-body">
                                <h4 className="card-title text-success">FUNDING</h4>
                                <h4 className="card-title">{project.title}</h4>
                                <p className="card-text">{project.description}</p>
                                <Link className="nav-link " id="profileDropdown" to="#" data-toggle="dropdown" aria-expanded="false">
                                    <div className="prelaunch-image">
                                        {user.avatar? <img src={user.avatar} alt="avatar_image" /> : <img src="assets/images/faces-clipart/pic-1.png" alt="user avatar-default"/>}
                                        <span className="availability-status online"></span>

                                    </div>
                                    <div className="nav-profile-text">
                                        <p className="mb-1 text-black">{user.username}</p>
                                    </div>
                                </Link>
                                <div className="project_sise_price">
                                    <h4>$0 FCFA</h4>
                                    <div className="product-qty">
                                        <h4>0 Backers</h4>
                                    </div>
                                </div>
                                <div className="progress mb-3">
                                    <div className="progress-bar" role="progressbar" style={{ width: `0%` }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="project_sise_percent">
                                    <h4>0%</h4><p>of</p>
                                    <div className="product-qty">
                                       <h4>${funding ? funding.goal: 500 }fcfa</h4>
                                    </div>
                                </div>
                                <div className="project_sise_price">
                                <button className="btn btn-primary">Back it</button>
                                    <button className="btn btn-primary">Lauch Campaign</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                    <div className="col-xl-14 col-lg-12 col-md-12 col-sm-12 col-12 m-b-60">
                        <div className="card">
                            <ul className="nav nav-tabs" id="myTab5" role="tablist">
                                <li className="nav-item">
                                    <Link className="nav-link active border-left-0" id="product-tab-1" data-toggle="tab" href="#tab-1" role="tab" aria-controls="product-tab-1" aria-selected="true">Story</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" id="product-tab-2" data-toggle="tab" href="#tab-2" role="tab" aria-controls="product-tab-2" aria-selected="false">FAQ</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" id="product-tab-2" data-toggle="tab" href="#tab-2" role="tab" aria-controls="product-tab-2" aria-selected="false">Comments</Link>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent5">
                                <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="product-tab-1">
                                    <p>{project.history}</p>
                                    {/* <p>Nam condimentum erat aliquet rutrum fringilla. Suspendisse potenti. Vestibulum placerat elementum sollicitudin. Aliquam consequat molestie tortor, et dignissim quam blandit nec. Donec tincidunt dui libero, ac convallis urna dapibus eu. Praesent volutpat mi eget diam efficitur, a mollis quam ultricies. Morbi eu turpis odio.</p> */}
                                    {/* <ul className="list-unstyled arrow">
                                        <li>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                        <li>Donec ut elit sodales, dignissim elit et, sollicitudin nulla.</li>
                                        <li>Donec at leo sed nisl vestibulum fermentum.
                                        </li>
                                    </ul> */}
                                </div>
                                <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="product-tab-2">
                                    {/* <div className="review-block">
                                        <p className="review-text font-italic m-0">“Vestibulum cursus felis vel arcu convallis, viverra commodo felis bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin non auctor est, sed lacinia velit. Orci varius natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.”</p>
                                        <div className="rating-star mb-4">
                                            <i className="fa fa-fw fa-star"></i>
                                            <i className="fa fa-fw fa-star"></i>
                                            <i className="fa fa-fw fa-star"></i>
                                            <i className="fa fa-fw fa-star"></i>
                                            <i className="fa fa-fw fa-star"></i>
                                        </div>
                                        <span className="text-dark font-weight-bold">Virgina G. Lightfoot</span><small className="text-mute"> (Company name)</small>
                                    </div> */}
                                    {/* <div className="review-block border-top mt-3 pt-3">
                                        <p className="review-text font-italic m-0">“Integer pretium laoreet mi ultrices tincidunt. Suspendisse eget risus nec sapien malesuada ullamcorper eu ac sapien. Maecenas nulla orci, varius ac tincidunt non, ornare a sem. Aliquam sed massa volutpat, aliquet nibh sit amet, tincidunt ex. Donec interdum pharetra dignissim.”</p>
                                        <div className="rating-star mb-4">
                                            <i className="fa fa-fw fa-star"></i>
                                            <i className="fa fa-fw fa-star"></i>
                                            <i className="fa fa-fw fa-star"></i>
                                            <i className="fa fa-fw fa-star"></i>
                                            <i className="fa fa-fw fa-star"></i>
                                        </div>
                                        <span className="text-dark font-weight-bold">Ruby B. Matheny</span><small className="text-mute"> (Company name)</small>
                                    </div> */}
                                    <div className="review-block  border-top mt-3 pt-3">
                                        <p className="review-text font-italic m-0">!!!Oups Empty</p>
                                        <div className="rating-star mb-4">
                                            <i className="fa fa-fw fa-star"></i>
                                            <i className="fa fa-fw fa-star"></i>
                                            <i className="fa fa-fw fa-star"></i>
                                            <i className="fa fa-fw fa-star"></i>
                                            <i className="fa fa-fw fa-star"></i>
                                        </div>
                                        {/* <span className="text-dark font-weight-bold">Gloria S. Castillo</span><small class="text-mute"> (Company name)</small> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default PreLaunch
