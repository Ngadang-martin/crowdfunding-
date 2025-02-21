import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../state/actions/AuthActions'
import {Link} from 'react-router-dom'


const Login = () => {

  const [loginData, setloginData] = useState({
    username: "",
    password: ""
  })

  const handelSubmit = (e) => {
    e.preventDefault()
    dispatch(loginUser(loginData))
  }

  const dispatch = useDispatch()

  const state = useSelector(state => state.authReducer.token)

  return (
    <div className="container-scroller">

      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth">
          <div className="row flex-grow">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left p-5">
                <div className="brand-logo">
                  <img alt="Logo" src="../../assets/images/logo.svg" />
                </div>
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <form className="pt-3">
                  {state.status === 400 ?
                    <p className="alert alert-danger">{state.message}</p>
                    : null
                  }
                  <div className="form-group">
                    <input type="text" onChange={(e) => {
                      setloginData({ ...loginData, username: e.target.value })
                    }} className="form-control form-control-lg" id="username" placeholder="Username" />
                  </div>
                  <div className="form-group">
                    <input type="password" onChange={(e) => {
                      setloginData({ ...loginData, password: e.target.value })
                    }} className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <div className="mt-3">
                    <button onClick={handelSubmit} className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" >SIGN IN</button>
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" /> Keep me signed in </label>
                    </div>
                    <Link to="" className="auth-link text-black">Forgot password?</Link>
                  </div>
                  <div className="mb-2">
                    <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                      <i className="mdi mdi-facebook mr-2"></i>Connect using facebook </button>
                  </div>
                  <div className="text-center mt-4 font-weight-light"> Don't have an account? <Link to="/register" className="text-primary">Create</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
 
      </div>

    </div>
  )
}

export default Login
