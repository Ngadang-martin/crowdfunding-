import React, { useState } from 'react'
import DashHeader from '../../widgets/DashHeader'
import Footer from '../Footer'
import Header from '../Header'
import Sidebar from '../Sidebar'
import InputField from '../../widgets/InputFields'
import Button from '../../widgets/Button'
import { useDispatch, useSelector } from 'react-redux'
import {addProjectContent} from '../../../state/actions/ProjectAction'
const Content = () => {
  const [assets, setassets] = useState({
    asset: [],
    description: "",
    asset_name: ""
  })
  const id = 1
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  const handleImageUpload = async (e) => {
    let tempArr = [];
    for (let i = 0; i < e.target.files.length; i++) {
      tempArr.push(await getBase64(e.target.files[i]))
    }
    assets.asset = tempArr
    console.log(tempArr)
  }
 
  const dispatch = useDispatch()
  const handleSubmit = (e)=> {
    dispatch(addProjectContent(id, assets))
  }
  const state = useSelector(state => state.projectReducer.content)
  return (
    <div>
      <div className="container-scroller">
        <Header />
        <Sidebar />
        <div className="main-panel">
          <div className="content-wrapper">
            <DashHeader title="Project Forms" item="Edit Project" destination="Basic" />
            <div className="col-10 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Add Some project Content that is videos && photos</h4>
                    {state.status === 400 ?
                    <p className="alert alert-danger">{state.message}</p>
                    : null
                  }
                  <InputField onChange={(e)=>{setassets({...assets, asset_name: e.target.value})}} type="text" label="Asset Name" />
                  <InputField onChange={(e)=>{setassets({...assets, description: e.target.value})}} type="text" label="Asset Description" />
                  {/* <MultipleImage onChange={handleImageUpload} onClick={upload} type="file" label="Upload Asset" name="ima[]" placeholder="upload single or multiple assets of a project" multiple /> */}
                  <input className="form-control" type="file" onChange={handleImageUpload} accept="image/png image/jpeg" multiple = {true}/><br/>
                  <Button onClick={handleSubmit}  accept="image/*" type="submit" name="Save and Continue" className="btn btn-primary" />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default Content
