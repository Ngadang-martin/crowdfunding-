import React, {useState} from 'react'
import Button from '../../widgets/Button'
import DashHeader from '../../widgets/DashHeader'
import InputFields from '../../widgets/InputFields'
import Footer from '../Footer'
import Header from '../Header'
import {useDispatch,useSelector} from 'react-redux'

import Sidebar from '../Sidebar'
import { addProjectFunding } from '../../../state/actions/ProjectAction'
const Funding = () => {
    const [funding, setfunding] = useState({
        funding_type:"",
        goal: null,
        back_number: null,
        account_number: null,
    })
    const id = 1
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addProjectFunding(id, funding))
        console.log(funding);
    }
    const state = useSelector(state => state.projectReducer.funding)
    return (
        <div className="container-scroller">
            <Header />
            <Sidebar />
            <div className="main-panel">
                <div className="content-wrapper">
                    <DashHeader title="Project Funding" item="Project Editor" destination="funding" />
                    <div className="col-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Project Funding </h4>
                                <p className="card-description">Fill in your project funding information </p>
                                <form className="forms-sample">
                                {state.status === 400 ?
                    <p className="alert alert-danger">{state.message}</p>
                    : null
                  }
                                    <InputFields onChange={(e) => {setfunding({ ...funding, funding_type: e.target.value }) }} type="text" label="Funding Type" name="title" placeholder="Fixed or flexible" />
                                    <InputFields  onChange={(e) => {setfunding({ ...funding, goal: e.target.value }) }} type="text" label="Campaign Goal Amount & Currency" name="goal" placeholder="amount.." />
                                    <InputFields  onChange={(e) => {setfunding({ ...funding, bank_number: e.target.value }) }} type="text" label="Bank Number" name="bank_number" placeholder="123456789" />
                                    <InputFields  onChange={(e) => {setfunding({ ...funding, account_number: e.target.value }) }} type="text" label="Account Number" name="account_number" placeholder="" />
                                    <Button onClick={handleSubmit} className="btn btn-gradient-primary mr-2" type="submit" name="Save and Preview" />
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
export default Funding
