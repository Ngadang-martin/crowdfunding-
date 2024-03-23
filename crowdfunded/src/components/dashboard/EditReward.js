import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { editProjectReward } from '../../state/actions/ProjectAction';
import Imagefield from '../widgets/Imagefield';

import InputFields from '../widgets/InputFields';

const EditReward = ({closeEditreward, rewardData}) => {
    const [reward, setreward] = useState(rewardData)

  

    useEffect(() => {
        setreward(rewardData)
    },[rewardData])

    let id = rewardData.id
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
        reward.editingImage = img;
        console.log(img);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editProjectReward(id,reward))
      }
    return (
        <div className="modalbackgound">
            <div className="modalContainer">
                <div className="tiyleClosebtn">
                    <button className="closeWindows"  onClick={() => closeEditreward(0)}>x</button>
                </div>
                <div className="title">
                    <h4>Edit Project Reward</h4>
                </div>
                <div className="body">
                    <div className="col-12 grid-margin stretch-card">
                        <div className="card" style={{ marginTop: "-10px"}} >
                            <div className="card-body">
                                <h5 className="card-title">Enter one or multiple field to change some data </h5>
                                <form className="forms-sample">
                                    <InputFields onChange={(e) => { setreward({ ...reward, price: e.target.value }) }}   value={reward.price}type="text" label="price" name="price" placeholder="40000" />
                                    <InputFields onChange={(e) => { setreward({ ...reward, retail_price: e.target.value })}} value={reward.retail_price} type="text" label="Retail Price" name="retail_price" placeholder="" />
                                    <InputFields onChange={(e) => {setreward({ ...reward, title: e.target.value })}} value={reward.title} type="text" label="Title" name="title" placeholder="Reward title" />
                                    <InputFields onChange={(e) => {setreward({ ...reward, item: e.target.value })}}  value={reward.item}type="text" label="Reward Item" name="item" placeholder="Reward Item" />
                                    <InputFields onChange={(e) => {setreward({ ...reward, description: e.target.value })}} value={reward.description} type="text" label="Reward Description" name="description" placeholder="Project Description" />
                                    <Imagefield onChange={getImage} type="file" label="image" onClick={upload}  name="ima[]" placeholder="Uplaod reward Image" />
                                    <InputFields onChange={(e) => {setreward({ ...reward, quantity: e.target.value })}}  value={reward.quantity}type="text" label="quantity" name="quantitt" placeholder="12" />
                                    <InputFields onChange={(e) => {setreward({ ...reward, send_date: e.target.value })}}  value={reward.send_date}type="date" label="delivery date" name="delivery_date" placeholder="2000-05-05" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div>
                        <button className="btn btn-danger rounded" id="closeBtn" onClick={() => closeEditreward(0)} >Close</button>
                    </div>
                    <div>
                        <button onClick={handleSubmit} className="btn btn-success rounded">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditReward
