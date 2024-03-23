import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useSelector, useDispatch } from 'react-redux'
import { getCategory } from '../../state/actions/CategoryAction'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ProjectDetail = (props) => {
    const id = parseInt(props.match.params.id)
    const category = useSelector(state => state.categoryReducer.category)
    const [projectData, setprojectData] = useState({})
    const [contents, setcontents] = useState([])
    const [image, setimage] = useState("")
    const [user, setuser] = useState({})
    const [ProjectFunding, setProjectFunding] = useState({})
    const [reward, setreward] = useState([])
    var testeur = async () => {
        setcontents(await axios.get(`http://localhost:8080/api/projectAsset/${id}`).then(response => response.data))
        let state = await axios.get(`http://localhost:8080/api/SingleGetFundingAndProject/${id}`).then(response => response.data)
        setimage(state.image)
        setuser(state.User)
        setprojectData(state)
        setProjectFunding(state.ProjectFunding)
        setreward(state.rewards)
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategory)
        testeur()
    }, [dispatch, id]) 
    return (
        <div className="content-wrapper">
            <Header category={category} />
            <div key={projectData.id} className="card">
                <div className="card-horizontal" style={{ display: "flex", flex: "1 1 auto" }}>
                    <div className="project-details-image">
                        <img className="" src={image} alt="Project Image1" />
                    </div>
                    <div className="card-body detail-size">
                        <h4 className="card-title text-success">FUNDING</h4>
                        <h4 className="card-title">{projectData.title}</h4>
                        <p className="card-text">{projectData.description}</p>
                        <Link to="" className="nav-link " id="profileDropdown" data-toggle="dropdown" aria-expanded="false">
                            <div className="prelaunch-image">
                                {user.avatar !== null ? <img src={user.avatar} alt="avatar_image" /> : <img src="assets/images/faces-clipart/pic-1.png" alt="user avatar-default" />}
                                <span className="availability-status online"></span>
                            </div>
                            <div className="nav-profile-text">
                                <p className="mb-1 text-black" style={{ textTransform: "capitalize" }}>{user.username} {user.lastname}</p>
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
                                <h4>${ProjectFunding ? ProjectFunding.goal : 500}fcfa</h4>
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-primary">Back this Project</button>
                        </div>
                    </div>
                </div>
            </div>
            <br /><hr /><br />
            <div className="project_sise_percent">
                <h4>Project Content</h4><p></p>
                <div className="product-qty">
                    <h4>Select a Reward</h4>
                </div>
            </div>
            <div className="projects_content" >
                <div className="images">
                    <div className="image" >
                        {contents.map((content) => (
                            <Photo content={content} />
                        ))}
                    </div>
                </div>
                <div className="col-md-4 grid-margin stretch-card">
                    <div className="">
                        {reward.map((rewards) => (
                            <Image rewards={rewards} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProjectDetail
export const Image = (props) => {
    const { rewards } = props
    return (
        <div key={rewards.id} className="col-xl-12 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="card" style={{ boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px" }}>
                <div className="" style={{ height: "12rem", overflow: "hidden" }}>
                    <img className="card-img-top img-fluid" style={{ height: "100%" }} src={rewards.image} alt="Card image1 cap" />
                </div>
                <div className="card-body reward-body-control">
                    <br /><h3 className="card-title">{rewards.title}</h3>
                    <p className="card-text">{rewards.description}</p>
                    <h4>Items Found in this reward</h4>
                    <ul>
                        {rewards.item.split(",").map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <div className="project_sise_price">
                        <h4>Price</h4>
                        <div className="product-qty">
                            <h6>Retail Price</h6>
                        </div>
                    </div>
                    <div className="project_sise_price">
                        <h6>${rewards.price}</h6>
                        <div className="product-qty">
                            <h6>{rewards.retail_price}</h6>
                        </div>
                    </div>
                    <div className="project_sise_price">
                        <h6>Possible delivery date</h6>
                        <div className="product-qty">
                            <h6>{rewards.send_date.split('').slice(0, 10).join("")}</h6>
                        </div>
                    </div>
                </div>
                <Link to="/checkout" className="btn btn-primary"> Get This Reward </Link>
            </div>
        </div>
    );
}
const Photo = (props) => {
    const { content } = props;
    return (
        <div key={content.id}>
            <div className="card-body">
                <h1 className="card-title">{content.asset_name}</h1>
                <h4 className="card-description"> {content.description}
                </h4>
            </div>
            {content.photos.map((photo) => (
                <div key={photo.id} className="project-content-image">
                    <img  src={photo.image} alt="content Image1" />
                </div>
            ))}
        </div>
    );
}