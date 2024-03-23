import React, { useState } from 'react'
import Imagefield from './Imagefield'
import InputFields from './InputFields'
import { useDispatch, useSelector} from 'react-redux'

import './Modal.css'
import { addProjectReward } from '../../state/actions/ProjectAction'
const Modal = ({ closeModal }) => {
    const [reward, setreward] = useState({
        title: "",
        price: "",
        retail_price: "",
        item: "",
        image: "",
        description: "",
        quantity: "",
        send_date: "",
        ProjectId: 1
    })
    const dispatch = useDispatch()

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }
    const upload = () => {
        document.querySelector(".file-upload-default").click();

    }
    const getImage = async (e) => {
        const [file] = document.querySelector(".file-upload-default").files
        console.log(file);
        var img = await getBase64(file)
        reward.image = img;
        console.log(img);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
         dispatch(addProjectReward(reward))
        console.log(reward);
      }
    const state = useSelector(state => state.projectReducer.addreward)
    return (
        <div className="modalbackgound">
            <div className="modalContainer">
                <div className="tiyleClosebtn">
                    <button className="closeWindows" on onClick={() => closeModal(0)}>x</button>
                </div>
                <div className="title">
                    <h4>Add Project Reward</h4>
                </div>
                <div className="body">
                    <div className="col-12 grid-margin stretch-card">
                        <div className="card" style={{ marginTop: "-10px"}}>
                            <div className="card-body">
                                <h5 className="card-title">Fill the Following information to add a project reward</h5>
                                <form className="forms-sample">
                                {state.status === 400 ?
                    <p className="alert alert-danger">{state.message}</p>
                    : null
                  }
                                    <InputFields onChange={(e) => { setreward({ ...reward, price: e.target.value }) }} type="text" label="price" name="price" placeholder="40000" />
                                    <InputFields onChange={(e) => { setreward({ ...reward, retail_price: e.target.value })}} type="text" label="Retail Price" name="retail_price" placeholder="" />
                                    <InputFields onChange={(e) => {setreward({ ...reward, title: e.target.value })}} type="text" label="Title" name="title" placeholder="Reward title" />
                                    <InputFields onChange={(e) => {setreward({ ...reward, item: e.target.value })}} type="text" label="Reward Item" name="item" placeholder="Reward Item" />
                                    <InputFields onChange={(e) => {setreward({ ...reward, description: e.target.value })}} type="text" label="Reward Description" name="description" placeholder="Project Description" />
                                    <Imagefield onChange={getImage} type="file" label="image" onClick={upload} name="ima[]" placeholder="Uplaod reward Image" />
                                    <InputFields onChange={(e) => {setreward({ ...reward, quantity: e.target.value })}} type="text" label="quantity" name="quantitt" placeholder="12" />
                                    <InputFields onChange={(e) => {setreward({ ...reward, send_date: e.target.value })}} type="date" label="delovery_date" name="delivery_date" placeholder="2000-05-05" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div>
                        <button className="btn btn-danger rounded" id="closeBtn" onClick={() => closeModal(0)} >Close</button>
                    </div>
                    <div>
                        <button onClick={handleSubmit} className="btn btn-success rounded">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal
