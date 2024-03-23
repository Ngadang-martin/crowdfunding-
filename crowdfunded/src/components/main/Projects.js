import React , {useEffect}from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {allProjectData} from '../../state/actions/ProjectAction'
import { getCategory } from '../../state/actions/CategoryAction'
import Header from './Header'
import {Link} from 'react-router-dom'


const Projects = () => {
    const projects = useSelector(state => state.projectReducer.projectData)
    const category = useSelector(state => state.categoryReducer.category)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(allProjectData)
        dispatch(getCategory)
     },[dispatch])
    return (
        <div className="content-wrapper">
            <Header category={category} />
           aussi longtemps que tu vivra tu noubliras jamais les etres qui te sont chere 
           <section className="services section-bg section-space">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title style2 text-center">
                                <div className="section-top">
                                    <h1><b>List Of Campaigns</b></h1><h4>Here is the list of all campaigns scroll to see more</h4>
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
                {/* <nav aria-label="Page navigation example">
                                                <ul class="pagination pagination-lg">
                                                    <li class="page-item"><Link class="page-link" to="#">Previous</Link></li>
                                                    <li class="page-item"><Link class="page-link" to="#">1</Link></li>
                                                    <li class="page-item active"><Link class="page-link " to="#">2</Link></li>
                                                    <li class="page-item"><Link class="page-link" to="#">3</Link></li>
                                                    <li class="page-item"><Link class="page-link" to="#">Next</Link></li>
                                                </ul>
                                            </nav> */}
            </section>
        </div>
    )
}

export default Projects
