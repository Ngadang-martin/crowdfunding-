import React , {useState, useEffect}from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Sidebar from '../Sidebar'
import InputFields from '../../widgets/InputFields'
import Textarea from '../../widgets/Textarea'
import Imagefield from '../../widgets/Imagefield'
import DashHeader from '../../widgets/DashHeader'
import Button from '../../widgets/Button'
import { SelectInput } from '../../widgets/Select'
import {useDispatch, useSelector} from 'react-redux'
import { addProjectBasic } from '../../../state/actions/ProjectAction'
import { getCategory } from '../../../state/actions/CategoryAction'
const Basics = () => {
  const id = window.localStorage.getItem('id')
  const [basics, setbasics] = useState({
    title: "",
    description: "",
    image: "",
    location: "",
    CategoryId: "",
    video: "",
    tag: "",
    history: "",
    duration: "",
    UserId: id,
  })
  const upload = () => {
    document.querySelector(".file-upload-default").click();
  }
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  const dispatch = useDispatch()
  const getImage = async (e) => {
    const [file] = document.querySelector(".file-upload-default").files
    var img = await getBase64(file)
    basics.image = img;
    console.log(img);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addProjectBasic(basics))
    console.log(basics);
  }

  useEffect(() => {
    dispatch(getCategory)
}, [dispatch])
var categoryList = useSelector(state => state.categoryReducer.category)
const state = useSelector(state => state.projectReducer.basics)
  return (
    <div className="container-scroller">
      <Header />
      <Sidebar />
      <div className="main-panel">
        <div className="content-wrapper">
          <DashHeader title="Project Forms" item="Edit Project" destination="Basic" />
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Create Project Basics</h4>
                 <form className="forms-sample">
                 {state.status === 400 ?
                    <p className="alert alert-danger">{state.message}</p>
                    : null
                  }
                  <InputFields onChange={(e) => {setbasics({ ...basics, title: e.target.value }) }} type="text" label="Project Name" name="title" placeholder="Project title" />
                  <InputFields onChange={(e) => {setbasics({ ...basics, description: e.target.value }) }} type="text" label="Description" name="description" placeholder="Project description" />
                  <InputFields onChange={(e) => {setbasics({ ...basics, location: e.target.value }) }} type="text" label="Location" name="country" placeholder="Country" />
                  <Imagefield  onChange={getImage} type="file" label="image" onClick={upload} name="ima[]" placeholder="Uplaod Image" />
                  <SelectInput onChange={(e) => {setbasics({ ...basics, CategoryId: e.target.value }) }}  options={categoryList} label="Category"/>
                  <InputFields onChange={(e) => {setbasics({ ...basics, tag: e.target.value }) }} type="text" label="tag" name="tag" placeholder="tags" />
                  <InputFields onChange={(e) => {setbasics({ ...basics, video: e.target.value }) }} type="text" label="Video Url" name="video" placeholder="htts://...." />
                  <InputFields onChange={(e) => {setbasics({ ...basics, location: e.target.value }) }} type="text" label="Location" name="country" placeholder="Country" />
                  <InputFields onChange={(e) => {setbasics({ ...basics, duration: e.target.value }) }} type="text" label="Duration" name="duration" placeholder="" />
                  <Textarea    onChange={(e) => {setbasics({ ...basics, history: e.target.value }) }} type="text" label="Story" name="story" placeholder="" />
                  <Button      onClick={handleSubmit} className="btn btn-gradient-primary mr-2" type="submit" name="Save and Continue" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
export default Basics