import React, { useState } from 'react'
import DashHeader from '../../widgets/DashHeader'
import Footer from '../Footer'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Textarea from '../../widgets/Textarea'
import Imagefield from '../../widgets/Imagefield'
import { useDispatch, useSelector } from 'react-redux'
import { updateTeam } from '../../../state/actions/ProjectAction'
import Button from '../../widgets/Button'

const Teams = () => {
    const [team, setteam] = useState({
        fistname: "",
        lastname: "",
        username: "",
        phone_number: "",
        dob: "",
        country: "",
        email: "",
        support_email: "",
        avatar: "",
        address: "",
        bank_number: "",
        biography: ""
    })

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }


    const id = window.localStorage.getItem('id')
    const upload = () => {
        document.querySelector(".file-upload-default").click();
    }
    const getImage = async (e) => {
        const [file] = document.querySelector(".file-upload-default").files
        var img = await getBase64(file)
        team.avatar = img;
        console.log(img);
    }
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateTeam(id,team))
        console.log(team);
    }
    const state = useSelector(state => state.projectReducer.team)

    return (
        <div className="container-scroller">
            <Header />
            <Sidebar />
            <div className="main-panel">
                <div className="content-wrapper">
                    <DashHeader title="Project Team" item="Edit Project" destination="Teamk" />
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Complete Your Profile And add Team members  </h4>
                                <form className="form-sample">

                                    <p className="card-description"> Your Information </p>
                                    {state.status === 400 ?
                    <p className="alert alert-danger">{state.message}</p>
                    : null
                  }
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label" data-toggle="tooltip" data-placement="top" title="Tooltip on top">First Name</label>
                                                <div className="col-sm-9">
                                                    <input onChange={(e) => {
                                                        setteam({ ...team, fistname: e.target.value })
                                                    }} type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Last Name</label>
                                                <div className="col-sm-9">
                                                    <input onChange={(e) => {
                                                        setteam({ ...team, lastname: e.target.value })
                                                    }} type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Gender</label>
                                                <div className="col-sm-9">
                                                    <select className="form-control">
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Date of Birth</label>
                                                <div className="col-sm-9">
                                                    <input onChange={(e) => {
                                                        setteam({ ...team, dob: e.target.value })
                                                    }} type="date" className="form-control" placeholder="dd/mm/yyyy" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="card-description"> Address </p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Physical address</label>
                                                <div className="col-sm-9">
                                                    <input onChange={(e) => {
                                                        setteam({ ...team, address: e.target.value })
                                                    }} type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Email Address</label>
                                                <div className="col-sm-9">
                                                    <input onChange={(e) => {
                                                        setteam({ ...team, email: e.target.value })
                                                    }} type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Support Email</label>
                                                <div className="col-sm-9">
                                                    <input onChange={(e) => {
                                                        setteam({ ...team, support_email: e.target.value })
                                                    }} type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">PhoneNumber</label>
                                                <div className="col-sm-9">
                                                    <input onChange={(e) => {
                                                        setteam({ ...team, phone_number: e.target.value })
                                                    }} type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">City</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Country</label>
                                                <div className="col-sm-9">
                                                    <select onChange={(e) => {
                                                        setteam({ ...team, country: e.target.value })
                                                    }} className="form-control">
                                                        <option value="America">America</option>
                                                        <option value="Italy">Italy</option>
                                                        <option value="Russia">Russia</option>
                                                        <option value="Britain">Britain</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Textarea onChange={(e) => {
                                        setteam({ ...team, biography: e.target.value })
                                    }} type="text" label="Biography" name="biography" placeholder="" />
                                    <Imagefield onChange={getImage} type="file" label="image" onClick={upload} name="ima[]" placeholder="Uplaod Image" />
                                    <Button onClick={handleSubmit} className="btn btn-light" type="submit" name="Save and Continue" />

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

export default Teams
