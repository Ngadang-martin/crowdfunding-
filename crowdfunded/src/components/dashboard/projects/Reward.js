import React, { useState, useEffect } from 'react'
import Modal from '../../widgets/Modal'
import Footer from '../Footer'
import Header from '../Header'
import Sidebar from '../Sidebar'
import DashHeader from '../../widgets/DashHeader'
import { useDispatch, useSelector } from 'react-redux'
import { getProjectReward, getUserProject } from '../../../state/actions/ProjectAction'
import EditReward from '../EditReward'
const Reward = () => {
    const [openModal, setOpenModal] = useState(0)
    const [openEditModal, setOpenEditModal] = useState(0)
    const [editData, seteditData] = useState({})
    const dispatch = useDispatch()
    // const user = useSelector(state => state.authReducer.userInfo)
    const project = useSelector(state => state.projectReducer.project)
    
    const rewards = useSelector(state => state.projectReducer.getreward)
    

    let projectId = project.id
    const id = window.localStorage.getItem('id')
    
    useEffect(() => {
        dispatch(getUserProject(id))
        dispatch(getProjectReward(projectId))
      
    }, [dispatch, id, projectId])
    const handleModal = (e) => {
        setOpenEditModal(1)
        let reward = rewards.filter((item) => item.id === parseInt(e.target.value))[0]
        reward = Object.assign({}, reward, { editingImage: '' })
        seteditData(reward)
    }
    return (
        <div className="container-scroller">
            <Header />
            <Sidebar />
            <div className="main-panel">
                <div className="content-wrapper">
                    <DashHeader title="Project Reward" item="Edit Project" destination="Reward" />
                    <button className="btn btn-primary" onClick={() => {
                        setOpenModal(1)
                    }}>Add a Project Reward</button>
                 
                    <div className="row">
                         {rewards.length  ? rewards.map((reward) => (
                            <div key={reward.id} className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="card" style={{ boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px" }}>
                                    <div className="" style={{ height: "12rem", overflow: "hidden" }}>
                                        <img className="card-img-top img-fluid" style={{ height: "100%" }} src={reward.image} alt="Card image1 cap" />
                                    </div>
                                    <div className="card-body reward-body-control">
                                        <br /><h3 className="card-title">{reward.title}</h3>
                                        <p className="card-text">{reward.description}</p>
                                        <ul>
                                            {reward.item.split(",").map((item, index) => (
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
                                            <h7>${reward.price}</h7>
                                            <div className="product-qty">
                                                <h8>{reward.retail_price}</h8>
                                            </div>
                                        </div>
                                        <button value={reward.id} className="btn btn-primary" onClick={handleModal}>Edit Reward</button>
                                    </div>
                                </div>
                            </div>
                        )) : <p>no reward found</p> } 
                    </div>
                </div>
                <Footer />
            </div>
            {openModal === 1 && <div className="containerModalBackground">
                <Modal closeModal={setOpenModal} />
            </div>}
            {openEditModal === 1 && <div className="containerModalBackground">
                <EditReward rewardData={editData} closeEditreward={setOpenEditModal} />
            </div>}
        </div>
    )
}
export default Reward